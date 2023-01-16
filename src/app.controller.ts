import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async requestBloomResponse(@Body() data) {
    const response = await this.appService.requestBloomResponse(data.question);
    const resultFiltered = response[0]['generated_text'];
    return resultFiltered.replace(data.question + '”', '');
  }
}
