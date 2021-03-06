import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger.error('[Logger.error]: Hello World!');
    console.error('[console.log]: Hello World!');

    return 'Hello World!';
  }

  getError(): never {
    Logger.error('[Logger.error]: Error');
    console.error('[console.log]: Error');

    throw new Error('Error!');
  }
}
