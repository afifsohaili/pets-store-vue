type Pipe<T> = (el: T[]) => T[]

// Takes the initial data and runs it through a pipe of functions
// The "pipes" or operators takes the collection, modifies it, and returns back the modified collection
// for the next pipe down the chain to use
export const chain = <T>(initialData: T[], ...pipes: Pipe<T>[]) =>
  pipes.reduce((data: T[], pipe: Pipe<T>) => {
    return pipe(data)
  }, initialData);
