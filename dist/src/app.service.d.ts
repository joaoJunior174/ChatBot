import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
export declare class AppService {
    private readonly configService;
    private httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    requestBloomResponse(question: string): Promise<AxiosResponse<string>>;
}
