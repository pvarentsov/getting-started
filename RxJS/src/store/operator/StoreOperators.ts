import { Observable, OperatorFunction } from 'rxjs';

type Filter = Record<string, unknown>;

export function whereAnd<TModel>(filter: Filter): OperatorFunction<TModel, TModel> {
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