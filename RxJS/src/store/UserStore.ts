import { from, Observable } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
import { User } from '../model/User';
import { whereAnd } from './operator/StoreOperators';

export class UserStore {

  private readonly users: User[] = [
    new User('1', 'nick_1', 'pass'),
    new User('2', 'nick_2', 'pass'),
    new User('3', 'nick_3', 'pass'),
  ];

  public one(filter: {id?: string}): Observable<User> {
    return from(this.users).pipe(
      whereAnd(filter),
      take(1),
    );
  }

  public list(): Observable<User[]> {
    return from(this.users).pipe(
      reduce<User, User[]>((acc, user) => [...acc, user], [])
    );
  }

}