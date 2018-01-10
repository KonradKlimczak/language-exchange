export type RemoteData<T> =
  | {
      kind: RemoteDataKind.NotAsked;
    }
  | {
      kind: RemoteDataKind.Loading;
    }
  | {
      kind: RemoteDataKind.Success;
      data: T;
    }
  | {
      kind: RemoteDataKind.Failure;
      error: Error;
    };

export enum RemoteDataKind {
  NotAsked,
  Loading,
  Success,
  Failure
}

export const assertNever = (_: never) => {
  throw new Error('This should never be reachable');
};
