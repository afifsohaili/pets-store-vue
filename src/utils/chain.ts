type Pipe<T> = (el: T[]) => T[]

export const chain = <T>(initialData: T[], ...pipes: Pipe<T>[]) =>
  pipes.reduce((data: T[], pipe: Pipe<T>) => {
    return pipe(data)
  }, initialData);

