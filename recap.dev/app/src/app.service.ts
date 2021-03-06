import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  greet(): string {
    Logger.log('[Logger.log]: Hello World!');
    console.log('[console.log]: Hello World!');

    return 'Hello World!';
  }

  throwError(): never {
    Logger.error('[Logger.error]: Error');
    console.error('[console.error]: Error');

    throw new Error('Error!');
  }

  request(): Observable<any> {
    return this.httpService.get('http://localhost:3000/hello').pipe(
      tap(() => {
        Logger.log(`[Logger.log]: Request`);
        console.log('[console.log]: Request');
      }),
      map(res => res.data)
    );
  }
}
