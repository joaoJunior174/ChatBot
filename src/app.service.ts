import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService,
  ) {}
  async requestBloomResponse(question: string): Promise<AxiosResponse<string>> {
    const apiUrl = this.configService.get('API_URL');
    const token = this.configService.get('TOKEN');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    };

    const payload = {
      inputs: question,
      parameters: {
        temperature: 1,
        min_length: 25,
        max_new_tokens: 60,
        return_full_text: true,
        do_sample: false,
        seed: 10,
        early_stopping: false,
        length_penalty: 0.0,
      },
      options: {
        use_cache: false,
        wait_for_model: false,
      },
    };

    return await lastValueFrom(
      this.httpService
        .post(`${apiUrl}`, payload, { headers })
        .pipe(map((resp) => resp.data)),
    );
  }
}
