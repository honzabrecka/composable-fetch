declare module 'rapid-check';
  // export type RNG = (min: number, max: number) => number

  // export type RoseTree<V> = [V, () => Array<RoseTree<V>>]

  // export type Gen<V> = (rng: RNG, size: number) => RoseTree<V>

  // type Tuple1<A> = (a: Gen<A>) => [Gen<A>]
  // type Tuple2<A, B> = (a: Gen<A>, b: Gen<B>) => [Gen<A>, Gen<B>]
  // export type Tuple<A, B> = Tuple1<A> | Tuple2<A, B>

  // type OneOf1<A> = (a: Gen<A>) => Gen<A>
  // type OneOf2<A, B> = (a: Gen<A>, b: Gen<B>) => Gen<A | B>
  // export type OneOf<A, B> = OneOf1<A> | OneOf2<A, B>

  // export interface Generators<A, B> {
  //   constantly: <T>(value: T) => Gen<T>,
  //   choose: (min: number, max: number, center?: number) => Gen<number>,
  //   int: Gen<number>,
  //   uint: Gen<number>,
  //   bool: Gen<boolean>,
  //   tuple: Tuple<A, B>,
  //   oneOf: OneOf<A, B>,
  //   array: <T>(gen: Gen<T>, min?: number, max?: number) => Gen<T[]>,
  //   fmap: <A, B>(f: (v: A) => B, gen: Gen<A>) => Gen<B>,
  //   bind: <A, B>(f: (v: A) => Gen<B>, gen: Gen<A>) => Gen<B>,
  // }

  // export interface Success {
  //   success: true,
  //   seed: number,
  // }

  // export interface Fail<T> {
  //   success: false,
  //   seed: number,
  //   fail: T,
  //   shrink: Shrink<T>,
  // }

  // export interface Shrink<T> {
  //   min: T,
  //   attempts: number,
  //   shrinks: number,
  // }

  // export type Result<T> = Success | Fail<T>

  // export type SyncProp<T> = (value: T) => boolean

  // export type AsyncProp<T> = (value: T) => Promise<boolean>

  // export type Prop<T> = SyncProp<T> | AsyncProp<T>

  // export function forAll<T>(
  //   gen: Gen<T>,
  //   prop: Prop<T>,
  //   count?: number,
  // ): Promise<Result<T>>

  // export var generators: Generators


// declare module 'rapid-check/src/jest.matcher';
