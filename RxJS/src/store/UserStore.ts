import { from, Observable } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
import { User } from '../model/User';
import { whereAnd } from './operator/StoreOperators';

type UserId = string;

export class UserStore {

  private readonly users: Map<UserId, User> = new Map([
    ['1', new User('1', 'nick_1', 'pass')],
    ['2', new User('2', 'nick_2', 'pass')],
    ['3', new User('3', 'nick_3', 'pass')]
  ]);

  public one(filter: {id?: string}): Observable<User> {
    return this.from().pipe(
      whereAnd(filter),
      take(1),
    );
  }

  public list(): Observable<User[]> {
    return this.from().pipe(
      reduce<User, User[]>((acc, value) => [...acc, value], [])
    );
  }

  private from(): Observable<User> {
    return from(Array.from(this.users.values()));
  }

}