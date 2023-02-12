import { createReducer, on } from '@ngrx/store';
import { Subordinate } from '../../Models/subordinate';
import {
  getSubordinates,
  getSubordinateSuccess,
} from '../actions/subordinate.action';

export interface SubordinateState {
  subordinates: Array<Subordinate>;
}

const initialState: Array<Subordinate> = [];

export const subordinateReducer = createReducer(
  initialState,
  on(getSubordinateSuccess, (state, { subordinates }) => [...subordinates]),
);
