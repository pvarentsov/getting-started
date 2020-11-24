import { from, Observable } from 'rxjs';
import { reduce } from 'rxjs/operators';
import { User } from '../models/User';

type UserId = string;

export class UserStore {

  private readonly users: Map<UserId, User> = new Map([
    ['1', new User('1', 'nick_1', 'pass')],
    ['2', new User('2', 'nick_2', 'pass')],
    ['3', new User('3', 'nick_3', 'pass')]
  ]);

  list(): Observable<User[]> {
    return from(Array.from(this.users.values()))
      .pipe(
        reduce<User, User[]>((acc, value) => [...acc, value], [])
      );
  }

}