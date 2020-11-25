import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Action } from './Action';

type Filter = Record<string, unknown>;

export function whereAnd<TModel>(filter: Filter): MonoTypeOperatorFunction<TModel> {
  return (source: Observable<TModel>): Observable<TModel> => new Observable(subscriber => {
    source.subscribe({
      next: (item: TModel) => {
        if (Object.keys(filter).every(key => (item as any)[key] === filter[key])) {
          subscriber.next(item);
        }
      },
      error: (error) => subscriber.error(error),
      complete: () => subscriber.complete(),
    });
  });
}

export function ofActionType<TType extends string, TPayload>(type: string): MonoTypeOperatorFunction<Action<TType, TPayload>> {
  return filter(action => action.type === type);
}