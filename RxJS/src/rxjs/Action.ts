export type Action<TType extends string, TPayload> = {
  type: TType;
  payload: TPayload; 
};
