import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@ApiTags('App')
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
