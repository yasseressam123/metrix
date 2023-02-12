import { createAction } from '@ngrx/store';
import { Subordinate } from '../../Models/subordinate';


export const getSubordinates = createAction('[Subordinate] Get subordinate');
export const getSubordinateSuccess = createAction(
  '[Subordinate] Get subordinate success',
  (subordinates: Array<Subordinate>) => ({ subordinates })
  
);
