import { createAction, props } from '@ngrx/store';
import { Beer } from '../model/model';

export const deleteBeerAction = createAction(
  '[Beer] delete',
  props<{ id: number }>()
);

export const addBeerAction = createAction(
  '[Beer] add',
  props<{ beer: Beer }>()
);
