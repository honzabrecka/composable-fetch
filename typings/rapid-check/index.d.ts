declare module 'rapid-check' {
  export type RNG = (min: number, max: number) => number

  export type RoseTree = any

  export type Gen<V> = (rng: RNG, size: number) => RoseTree

  export interface Generators {
    constantly: <T>(value: T) => Gen<T>
    choose: (min: number, max: number, center?: number) => Gen<number>
    int: Gen<number>,
    uint: Gen<number>,
    fmap: <A, B>(f: (v: A) => B, gen: Gen<A>) => Gen<B>
    bind: <A, B>(f: (v: A) => Gen<B>, gen: Gen<A>) => Gen<B>
    bool: Gen<boolean>,
    tuple: (...gens: Gen<any>[]) => Gen<any[]>,
    oneOf: (...gen: Gen<any>[]) => Gen<any>,
    array: <T>(gen: Gen<T>, min?: number, max?: number) => Gen<T[]>
  }

  export type Result = [true] | [false, any]

  export type Prop<T> = (value: T) => boolean

  export type AsyncProp<T> = (value: T) => Promise<boolean>

  export function forAll<T>(gen: Gen<T>, prop: Prop<T>, count?: number): Result

  export function asyncForAll<T>(gen: Gen<T>, prop: AsyncProp<T>, count?: number): Promise<Result>

  export var generators: Generators
}
