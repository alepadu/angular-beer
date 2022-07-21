import { createAction, props } from '@ngrx/store';
import { Beer } from '../model/model';

export const deleteBeerAction = createAction(
  '[Beer] delete',
  props<{ id: number }>()
);
