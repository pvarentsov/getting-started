import { from, Observable, of } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
import { User } from '../model/User';
import { whereAnd } from '../rxjs/Operator';

export class UserStore {

  private readonly users: Map<string, User> = new Map();

  public add(user: User): Observable<void> {
    this.users.set(user.id, user);
    return of(undefined);
  }

  public update(user: User): Observable<void> {
    this.users.set(user.id, user);
    return of(undefined);
  }

  public one(filter: {id?: string}): Observable<User> {
    return from(Array.from(this.users.values())).pipe(
      whereAnd(filter),
      take(1),
    );
  }

  public list(): Observable<User[]> {
    return from(Array.from(this.users.values())).pipe(
      reduce<User, User[]>((acc, user) => [...acc, user], [])
    );
  }

}