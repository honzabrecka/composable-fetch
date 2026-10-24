export function pipeP<T>(): (v: T) => Promise<T>
export function pipeP<T1, T2>(
  f1: (v: T1) => T2 | Promise<T2>,
): (v: T1) => Promise<T2>
export function pipeP<T1, T2, T3>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
): (v: T1) => Promise<T3>
export function pipeP<T1, T2, T3, T4>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
): (v: T1) => Promise<T4>
export function pipeP<T1, T2, T3, T4, T5>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
): (v: T1) => Promise<T5>
export function pipeP<T1, T2, T3, T4, T5, T6>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
): (v: T1) => Promise<T6>
export function pipeP<T1, T2, T3, T4, T5, T6, T7>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
): (v: T1) => Promise<T7>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
): (v: T1) => Promise<T8>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
): (v: T1) => Promise<T9>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
): (v: T1) => Promise<T10>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
): (v: T1) => Promise<T11>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
): (v: T1) => Promise<T12>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
): (v: T1) => Promise<T13>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
): (v: T1) => Promise<T14>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
): (v: T1) => Promise<T15>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
): (v: T1) => Promise<T16>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
): (v: T1) => Promise<T17>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
): (v: T1) => Promise<T18>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
): (v: T1) => Promise<T19>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
): (v: T1) => Promise<T20>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
): (v: T1) => Promise<T21>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
): (v: T1) => Promise<T22>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
): (v: T1) => Promise<T23>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
): (v: T1) => Promise<T24>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
  f24: (v: T24) => T25 | Promise<T25>,
): (v: T1) => Promise<T25>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
  T26,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
  f24: (v: T24) => T25 | Promise<T25>,
  f25: (v: T25) => T26 | Promise<T26>,
): (v: T1) => Promise<T26>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
  T26,
  T27,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
  f24: (v: T24) => T25 | Promise<T25>,
  f25: (v: T25) => T26 | Promise<T26>,
  f26: (v: T26) => T27 | Promise<T27>,
): (v: T1) => Promise<T27>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
  T26,
  T27,
  T28,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
  f24: (v: T24) => T25 | Promise<T25>,
  f25: (v: T25) => T26 | Promise<T26>,
  f26: (v: T26) => T27 | Promise<T27>,
  f27: (v: T27) => T28 | Promise<T28>,
): (v: T1) => Promise<T28>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
  T26,
  T27,
  T28,
  T29,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
  f24: (v: T24) => T25 | Promise<T25>,
  f25: (v: T25) => T26 | Promise<T26>,
  f26: (v: T26) => T27 | Promise<T27>,
  f27: (v: T27) => T28 | Promise<T28>,
  f28: (v: T28) => T29 | Promise<T29>,
): (v: T1) => Promise<T29>
export function pipeP<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
  T26,
  T27,
  T28,
  T29,
  T30,
>(
  f1: (v: T1) => T2 | Promise<T2>,
  f2: (v: T2) => T3 | Promise<T3>,
  f3: (v: T3) => T4 | Promise<T4>,
  f4: (v: T4) => T5 | Promise<T5>,
  f5: (v: T5) => T6 | Promise<T6>,
  f6: (v: T6) => T7 | Promise<T7>,
  f7: (v: T7) => T8 | Promise<T8>,
  f8: (v: T8) => T9 | Promise<T9>,
  f9: (v: T9) => T10 | Promise<T10>,
  f10: (v: T10) => T11 | Promise<T11>,
  f11: (v: T11) => T12 | Promise<T12>,
  f12: (v: T12) => T13 | Promise<T13>,
  f13: (v: T13) => T14 | Promise<T14>,
  f14: (v: T14) => T15 | Promise<T15>,
  f15: (v: T15) => T16 | Promise<T16>,
  f16: (v: T16) => T17 | Promise<T17>,
  f17: (v: T17) => T18 | Promise<T18>,
  f18: (v: T18) => T19 | Promise<T19>,
  f19: (v: T19) => T20 | Promise<T20>,
  f20: (v: T20) => T21 | Promise<T21>,
  f21: (v: T21) => T22 | Promise<T22>,
  f22: (v: T22) => T23 | Promise<T23>,
  f23: (v: T23) => T24 | Promise<T24>,
  f24: (v: T24) => T25 | Promise<T25>,
  f25: (v: T25) => T26 | Promise<T26>,
  f26: (v: T26) => T27 | Promise<T27>,
  f27: (v: T27) => T28 | Promise<T28>,
  f28: (v: T28) => T29 | Promise<T29>,
  f29: (v: T29) => T30 | Promise<T30>,
): (v: T1) => Promise<T30>
export function pipeP(...fns: Function[]) {
  return (value: any) =>
    new Promise((resolve, reject) => {
      ;(async function run([f, ...fns]: Function[], value: any) {
        try {
          if (f === undefined) resolve(value)
          else run(fns, await f(value))
        } catch (error) {
          reject(error)
        }
      })(fns, value)
    })
}

export const tryCatchP =
  <A, B>(
    trier: (value: A) => Promise<B>,
    catcher: (err: any, value: A) => Promise<B>,
  ) =>
  async (value: A): Promise<B> => {
    try {
      return await trier(value)
    } catch (error) {
      return await catcher(error, value)
    }
  }

const newError = (
  id: string,
  message: string,
  req?: Request,
  res?: Response,
) => {
  const error = new Error(message)
  ;(error as any).id = id
  if (req) (error as any).req = req
  if (res) (error as any).res = res
  return error
}

export const errorIds: {
  RetryError: string
  TimeoutError: string
  DecodeResponseError: string
  InvalidStatusCodeError: string
} = {
  RetryError: 'RetryError',
  TimeoutError: 'TimeoutError',
  DecodeResponseError: 'DecodeResponseError',
  InvalidStatusCodeError: 'InvalidStatusCodeError',
}

export type Delay = (t: number) => Promise<void>

export const delay: Delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })

const delayedFail = (timeout: number) =>
  delay(timeout).then(() => {
    throw newError(errorIds.TimeoutError, 'Timeout')
  })

export type Tap = (time: number) => unknown

const tapAndDelay = (f: Tap, time: number): Promise<void> => {
  f(time)
  return delay(time)
}

const nothing: Tap = () => undefined

export const delays: {
  delay: Delay
  tapAndDelay: typeof tapAndDelay
  constant: (time?: number, f?: Tap) => Delay
  exponential: (time?: number, f?: Tap) => Delay
  quadratic: (time?: number, f?: Tap) => Delay
  limited: (max: number, delay: Delay) => Delay
  linear: (time?: number, f?: Tap) => Delay
} = {
  delay,
  tapAndDelay,
  constant:
    (time = 1000, f = nothing): Delay =>
    () =>
      tapAndDelay(f, time),
  exponential:
    (time = 1000, f = nothing): Delay =>
    (i) =>
      tapAndDelay(f, 2 ** (i - 1) * time),
  quadratic:
    (time = 1000, f = nothing): Delay =>
    (i) =>
      tapAndDelay(f, i * i * time),
  limited:
    (max: number, delay: Delay): Delay =>
    (i) =>
      delay(((i - 1) % max) + 1),
  linear:
    (time = 1000, f = nothing): Delay =>
    (i) =>
      tapAndDelay(f, i * time),
}

export interface Request extends RequestInit {
  url: string
}

export const copyHeaders = (headers?: HeadersInit): HeadersInit | undefined => {
  if (headers instanceof Headers) return new Headers(headers)
  if (Array.isArray(headers))
    return headers.map(([name, value]): [string, string] => [name, value])
  return headers && { ...headers }
}

// Request enhancers never mutate passed request, so it can be reused
export const copyRequest = (
  req: Request,
  patch: Partial<Request> = {},
): Request => ({
  ...req,
  headers: copyHeaders(req.headers),
  ...patch,
})

export const withBaseUrl =
  (baseUrl: string) =>
  (req: Request): Request =>
    copyRequest(req, { url: baseUrl + req.url })

export const withHeader =
  (header: string, value: string) =>
  (req: Request): Request => {
    const copy = copyRequest(req)
    const name = header.toLowerCase()
    if (copy.headers instanceof Headers) copy.headers.set(header, value)
    else if (Array.isArray(copy.headers)) {
      copy.headers = copy.headers.filter(([key]) => key.toLowerCase() !== name)
      copy.headers.push([header, value])
    } else {
      // Hack for backward compatibility
      const headers: Record<string, string> = copy.headers || {}
      for (const key of Object.keys(headers))
        if (key.toLowerCase() === name) delete headers[key]
      headers[name] = value
      copy.headers = headers
    }

    return copy
  }

export const withCredentials =
  (value: RequestCredentials) =>
  (req: Request): Request =>
    copyRequest(req, { credentials: value })

export type Encoder<A, B> = (v: A) => B

export const withEncodedBody =
  <A, B>(encoder: Encoder<A, B>) =>
  (req: Request): Request => {
    if (req.method && req.method.toLowerCase() !== 'get' && req.body != null)
      return copyRequest(req, { body: encoder(req.body as any) as any })
    return req
  }

export const withJSONEncodedBody: (req: Request) => Request = withEncodedBody<
  any,
  string
>(JSON.stringify)

export type UnaryFetch = (req: Request) => Promise<Response>

export type BinaryFetch = (url: string, init: Request) => Promise<Response>

export const fetch1 =
  (fetch: BinaryFetch): UnaryFetch =>
  (req: Request) =>
    fetch(req.url, req)

export type RetryableFetch = () => Promise<Response>

const throwError = (req: Request, res?: Response) => {
  throw newError(errorIds.RetryError, 'Retry error', req, res)
}

const retryableErrors = new Set([
  'ETIMEDOUT', // One of the timeout limits were reached.
  'ECONNRESET', // Connection was forcibly closed by a peer.
  'EADDRINUSE', // Could not bind to any free port.
  'ECONNREFUSED', // Connection was refused by the server.
  'EPIPE', // The remote side of the stream being written has been closed.
  'ENOTFOUND', // Couldn't resolve the hostname to an IP address.
  'ENETUNREACH', // No internet connection.
  'EAI_AGAIN', // DNS lookup timed out.
  'UND_ERR_CONNECT_TIMEOUT', // undici: connecting to the server timed out.
  'UND_ERR_SOCKET', // undici: socket failed, e.g. closed by the server.
])
const retryableStatuses = new Set([408, 413, 429, 500, 502, 503, 504])

// Node's built-in fetch (undici) wraps the system error into error.cause
const errorCode = (error: any) => error?.code ?? error?.cause?.code

export const retryable =
  (fetch: UnaryFetch): ((req: Request) => RetryableFetch) =>
  (req: Request): RetryableFetch =>
  async () => {
    try {
      const res = await fetch(req)
      if (retryableStatuses.has(res.status)) throwError(req, res)
      return res
    } catch (error) {
      if (retryableErrors.has(errorCode(error))) throwError(req)
      throw error
    }
  }

/**
 * @deprecated 6.0.0
 */
export const withTimeout =
  (timeout: number): ((fetch: RetryableFetch) => RetryableFetch) =>
  (fetch: RetryableFetch): RetryableFetch =>
  () =>
    Promise.race([fetch(), delayedFail(timeout)])

export const decodeRetryAfterHeaderValue = (
  response?: Response,
): number | undefined => {
  const value = response?.headers.get('retry-after')
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  // delta-seconds
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed, 10) * 1000
  const ms = parseHttpDate(trimmed) - Date.now()
  return Number.isNaN(ms) ? undefined : Math.max(0, ms)
}

// IMF-fixdate: Sun, 06 Nov 1994 08:49:37 GMT
const imfFixdate =
  /^[A-Z][a-z]{2}, \d{2} [A-Z][a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT$/
// obsolete RFC 850: Sunday, 06-Nov-94 08:49:37 GMT
const rfc850Date =
  /^[A-Z][a-z]+, \d{2}-[A-Z][a-z]{2}-\d{2} \d{2}:\d{2}:\d{2} GMT$/
// obsolete asctime: Sun Nov  6 08:49:37 1994 (implicitly GMT)
const asctimeDate =
  /^[A-Z][a-z]{2} [A-Z][a-z]{2} [ \d]\d \d{2}:\d{2}:\d{2} \d{4}$/

const parseHttpDate = (value: string): number => {
  if (imfFixdate.test(value) || rfc850Date.test(value)) return Date.parse(value)
  if (asctimeDate.test(value)) return Date.parse(`${value} GMT`)
  return Number.NaN
}

export interface RetryOptions {
  /** Number of retries, so up to max + 1 requests are made. */
  max?: number
  delay?: Delay
  maxTimeout?: number
  /** Return false to not retry the request, e.g. a non-idempotent one. */
  filter?: (req?: Request) => boolean
}

const always = () => true

export const withRetry =
  ({
    max = 5,
    delay = delays.linear(),
    maxTimeout = Number.MAX_VALUE,
    filter = always,
  }: RetryOptions = {}): ((fetch: RetryableFetch) => Promise<Response>) =>
  async (fetch: RetryableFetch): Promise<Response> => {
    const errors: any[] = []
    const retryFailed = (message: string, last: any) => {
      const error = newError(errorIds.RetryError, message, last.req, last.res)
      ;(error as any).errors = errors
      return error
    }

    for (let i = 1; ; i++) {
      try {
        return await fetch()
      } catch (error) {
        if ((error as any).id !== errorIds.RetryError) throw error
        if (!filter((error as any).req)) throw error
        errors.push(error)
        if (i > max) throw retryFailed('Retry failed', error)
        const retryAfter = decodeRetryAfterHeaderValue((error as any).res)
        if (retryAfter !== undefined && retryAfter > maxTimeout)
          throw retryFailed('Retry-after is higher than maxTimeout', error)
        await (retryAfter === undefined ? delay(i) : delays.delay(retryAfter))
      }
    }
  }

export const withSafe204 =
  (text: string = '', json: any = {}) =>
  (res: Response): Response => {
    if (res.status === 204) {
      res.text = async () => text
      res.json = async () => json
    }
    return res
  }

export const withClone = (res: Response): Response => {
  ;(res as any).cloned = res.clone()
  return res
}

export const decodeResponse = (res: Response): Promise<Response> | Response => {
  const contentType = res.headers.get('content-type') || ''
  if (contentType.indexOf('application/json') === 0)
    return decodeJSONResponse(res)
  if (contentType.indexOf('application/x-www-form-urlencoded') === 0)
    return decodeFormDataResponse(res)
  if (contentType.indexOf('text/') === 0) return decodeTextResponse(res)
  return res
}

export const decodeTextResponse = async (res: Response): Promise<Response> => {
  ;(res as any).data = await res.text()
  return res
}

export const decodeJSONResponse = async (res: Response): Promise<Response> => {
  try {
    ;(res as any).data = await res.json()
    return res
  } catch (error) {
    throw newError(
      errorIds.DecodeResponseError,
      (error as any).message,
      undefined,
      res,
    )
  }
}

export const decodeFormDataResponse = async (
  res: Response,
): Promise<Response> => {
  try {
    ;(res as any).data = await res.formData()
    return res
  } catch (error) {
    throw newError(
      errorIds.DecodeResponseError,
      (error as any).message,
      undefined,
      res,
    )
  }
}

export const decodeArrayBufferResponse = async (
  res: Response,
): Promise<Response> => {
  ;(res as any).data = await res.arrayBuffer()
  return res
}

export const decodeBlobResponse = async (res: Response): Promise<Response> => {
  ;(res as any).data = await res.blob()
  return res
}

export const checkStatus = (res: Response): Response => {
  if (res.status < 200 || res.status >= 400)
    throw newError(
      errorIds.InvalidStatusCodeError,
      `Invalid status code: ${res.status}`,
      undefined,
      res,
    )
  return res
}

const formatError = async (error: any, prefix: string = 'Fetch error') => {
  let formatted = ''
  const append = (line: string, empty: boolean = false) => {
    const n = empty ? '\n' : ''
    formatted += `${n + line}\n${n}`
  }
  const { message, id, errors, req, res } = error

  append(prefix + (id ? ` [${id}]: ` : ': ') + message)
  if (req) append(`url: ${req.url}`)

  // RetryError thrown by retryable itself (e.g. without withRetry) has no errors
  if (id === errorIds.RetryError && errors) {
    const awaitingErrors = errors.map((error: any, i: number) =>
      formatError(error, `retry: [${i}]`),
    )
    const formattedErrors = await Promise.all(awaitingErrors)
    append(formattedErrors.join(''), true)
  } else if (
    id === errorIds.DecodeResponseError ||
    id === errorIds.InvalidStatusCodeError
  )
    if (res.data)
      append(
        typeof res.data === 'string' ? res.data : JSON.stringify(res.data),
        true,
      )
    else if (res.cloned) append(await res.cloned.text(), true)

  return formatted
}

export type Log = (message: string) => any

export const logError =
  (log: Log = console.error.bind(console)) =>
  async (error: Error): Promise<never> => {
    log(await formatError(error))
    throw error
  }

// Undecodable body of a response with invalid status (e.g. HTML 404 page)
// is reported as InvalidStatusCodeError, not as DecodeResponseError.
const decodeJSONResponseOrCheckStatus = tryCatchP(
  decodeJSONResponse,
  async (error, res: Response) => {
    checkStatus(res)
    throw error
  },
)

export const json = (
  fetch: BinaryFetch,
  options?: RetryOptions,
): ((v: Request) => Promise<Response>) =>
  pipeP(
    withHeader('Content-Type', 'application/json'),
    withHeader('Accept', 'application/json'),
    withJSONEncodedBody,
    retryable(fetch1(fetch)),
    withRetry(options),
    withSafe204(),
    decodeJSONResponseOrCheckStatus,
    checkStatus,
  )

export const text = (
  fetch: BinaryFetch,
  options?: RetryOptions,
): ((v: Request) => Promise<Response>) =>
  pipeP(
    retryable(fetch1(fetch)),
    withRetry(options),
    withSafe204(),
    decodeTextResponse,
    checkStatus,
  )

export const abortable = (): {
  signal: AbortSignal
  abort: () => void
} => {
  const controller = new AbortController()
  const { signal } = controller
  return {
    signal,
    abort: () => {
      controller.abort()
    },
  }
}

export const ignoreAbortError =
  <T>(handler: (error: Error) => T) =>
  (error: Error): T | undefined => {
    if (error.name === 'AbortError') return
    return handler(error)
  }
