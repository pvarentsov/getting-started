import { Controller, Get, HttpCode } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @HttpCode(200)
  greet(): string {
    return this.appService.greet();
  }

  @Get('error')
  @HttpCode(500)
  throwError(): never {
    return this.appService.throwError();
  }

  @Get('request')
  @HttpCode(200)
  request(): Observable<any> {
    return this.appService.request();
  }
}
