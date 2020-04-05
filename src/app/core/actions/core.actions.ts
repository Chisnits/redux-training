import { createAction } from '@ngrx/store';

export const increment = createAction('[Core] Increment');
export const decrement = createAction('[Core] Decrement');
export const reset = createAction('[Core] Reset');
