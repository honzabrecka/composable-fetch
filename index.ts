const isPromise = (v: any) => !!v
  && (typeof v === 'object' || typeof v === 'function')
  && typeof v.then === 'function'

export function pipeP<T1, T2>(f1: (v: T1) => T2 | Promise<T2>): (v: T1) => Promise<T2>
export function pipeP<T1, T2, T3>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>): (v: T1) => Promise<T3>
export function pipeP<T1, T2, T3, T4>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>): (v: T1) => Promise<T4>
export function pipeP<T1, T2, T3, T4, T5>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>): (v: T1) => Promise<T5>
export function pipeP<T1, T2, T3, T4, T5, T6>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>): (v: T1) => Promise<T6>
export function pipeP<T1, T2, T3, T4, T5, T6, T7>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>): (v: T1) => Promise<T7>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>): (v: T1) => Promise<T8>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>): (v: T1) => Promise<T9>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>): (v: T1) => Promise<T10>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>): (v: T1) => Promise<T11>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>): (v: T1) => Promise<T12>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>): (v: T1) => Promise<T13>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>): (v: T1) => Promise<T14>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>): (v: T1) => Promise<T15>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>): (v: T1) => Promise<T16>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>): (v: T1) => Promise<T17>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>): (v: T1) => Promise<T18>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>): (v: T1) => Promise<T19>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>): (v: T1) => Promise<T20>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>): (v: T1) => Promise<T21>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>): (v: T1) => Promise<T22>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>): (v: T1) => Promise<T23>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>): (v: T1) => Promise<T24>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>, f24: (v: T24) => T25 | Promise<T25>): (v: T1) => Promise<T25>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>, f24: (v: T24) => T25 | Promise<T25>, f25: (v: T25) => T26 | Promise<T26>): (v: T1) => Promise<T26>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>, f24: (v: T24) => T25 | Promise<T25>, f25: (v: T25) => T26 | Promise<T26>, f26: (v: T26) => T27 | Promise<T27>): (v: T1) => Promise<T27>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>, f24: (v: T24) => T25 | Promise<T25>, f25: (v: T25) => T26 | Promise<T26>, f26: (v: T26) => T27 | Promise<T27>, f27: (v: T27) => T28 | Promise<T28>): (v: T1) => Promise<T28>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>, f24: (v: T24) => T25 | Promise<T25>, f25: (v: T25) => T26 | Promise<T26>, f26: (v: T26) => T27 | Promise<T27>, f27: (v: T27) => T28 | Promise<T28>, f28: (v: T28) => T29 | Promise<T29>): (v: T1) => Promise<T29>
export function pipeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>(f1: (v: T1) => T2 | Promise<T2>, f2: (v: T2) => T3 | Promise<T3>, f3: (v: T3) => T4 | Promise<T4>, f4: (v: T4) => T5 | Promise<T5>, f5: (v: T5) => T6 | Promise<T6>, f6: (v: T6) => T7 | Promise<T7>, f7: (v: T7) => T8 | Promise<T8>, f8: (v: T8) => T9 | Promise<T9>, f9: (v: T9) => T10 | Promise<T10>, f10: (v: T10) => T11 | Promise<T11>, f11: (v: T11) => T12 | Promise<T12>, f12: (v: T12) => T13 | Promise<T13>, f13: (v: T13) => T14 | Promise<T14>, f14: (v: T14) => T15 | Promise<T15>, f15: (v: T15) => T16 | Promise<T16>, f16: (v: T16) => T17 | Promise<T17>, f17: (v: T17) => T18 | Promise<T18>, f18: (v: T18) => T19 | Promise<T19>, f19: (v: T19) => T20 | Promise<T20>, f20: (v: T20) => T21 | Promise<T21>, f21: (v: T21) => T22 | Promise<T22>, f22: (v: T22) => T23 | Promise<T23>, f23: (v: T23) => T24 | Promise<T24>, f24: (v: T24) => T25 | Promise<T25>, f25: (v: T25) => T26 | Promise<T26>, f26: (v: T26) => T27 | Promise<T27>, f27: (v: T27) => T28 | Promise<T28>, f28: (v: T28) => T29 | Promise<T29>, f29: (v: T29) => T30 | Promise<T30>): (v: T1) => Promise<T30>
export function pipeP(...fns: Function[]) {
  return (value: any) => new Promise((resolve, reject) => {
    (function run([f, ...fns], value: any) {
      if (!f)
        resolve(value)
      else {
        value = f(value)
        if (isPromise(value))
          value
            .then((value: any) => run(fns, value))
            .catch(reject)
        else
          run(fns, value)
      }
    })(fns, value)
  })
}

export const delay = (time: number) => new Promise<void>((resolve, _) => {
  setTimeout(() => resolve(), time)
})

const delayedFail = (timeout: number) => delay(timeout).then(() => {
  throw new Error('Timeout')
})

export type Delay = (i: number) => Promise<void>

export const delays = {
  constant: (time: number = 1000): Delay => (i: number) => delay(time),
  exponential: (time: number = 1000): Delay => (i: number) => delay(i * i * time),
  linear: (time: number = 1000): Delay => (i: number) => delay(i * time),
}

export interface Request extends RequestInit {
  url: string
}

export interface ResponseT extends Response {
  data?: any
}

const withBaseUrl = (baseUrl: string) => (req: Request) => {
  req.url = baseUrl + req.url
  return req
}

const withHeader = (header: string, value: string) => (req: Request) => {
  req.headers = req.headers || {}
  req.headers[header.toLowerCase()] = value
  return req
}

export type Encoder<A, B>  = (v: A) => B

const withEncodedBody = <A, B>(encoder: Encoder<A, B>) => (req: Request) => {
  if ((req.method && req.method.toLowerCase() !== 'get') && req.body)
    req.body = encoder(req.body)
  return req
}

export type UnaryFetch = (req: Request) => Promise<Response>

export type BinaryFetch = (url: string, init: Request) => Promise<Response>

const fetch1 = (fetch: BinaryFetch): UnaryFetch => (req: Request) => fetch(req.url, req)

export type RetryableFetch = () => Promise<Response>

const retryable = (fetch: UnaryFetch) => (req: Request): RetryableFetch => () => fetch(req)

const withTimeout = (timeout: number) => (fetch: RetryableFetch): RetryableFetch => {
  return () => Promise.race([fetch(), delayedFail(timeout)])
}

const withRetry = (max: number = 5, delay: Delay = delays.linear()) => (fetch: RetryableFetch): Promise<Response> => {
  return new Promise((resolve, reject) => {
    (function run(i: number) {
      if (i === max + 1)
        reject(new Error('Retry failed'))
      else
        fetch()
          .then(resolve)
          .catch((_) => delay(i).then(() => run(i + 1)))
    })(1)
  })
}

const constructResponseError = (message: string, res: Response) => {
  const e = new Error(message);
  (e as any).res = res
  return e
}

const withSafe204 = (text: string = '', json: any = {}) => (res: Response) => {
  if (res.status === 204) {
    res.text = () => Promise.resolve(text)
    res.json = () => Promise.resolve(json)
  }
  return res
}

const decodeResponse = (res: Response) => {
  const contentType = (res.headers.get('content-type') || '')
  return contentType.indexOf('application/json') === 0
    ? decodeJSONResponse(res)
    : decodeTextResponse(res)
}

const decodeTextResponse = async (res: Response) => {
  (res as any).data = await res.text()
  return res
}

const decodeJSONResponse = async (res: Response) => {
  try {
    (res as any).data = await res.json()
  } catch (e) {
    throw constructResponseError(e.message, res)
  }

  return res
}

const checkStatus = (res: Response) => {
  if (res.status < 200 || res.status >= 400)
    throw constructResponseError('Invalid status code', res)
  return res
}

export const composableFetch = {
  checkStatus,
  decodeJSONResponse,
  decodeResponse,
  decodeTextResponse,
  fetch1,
  retryable,
  withBaseUrl,
  withEncodedBody,
  withHeader,
  withRetry,
  withSafe204,
  withTimeout,
}
