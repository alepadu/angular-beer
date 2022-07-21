import { createReducer, on } from '@ngrx/store';
import { props } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers: any = createReducer(
  initialBeerState,
  on(Actions.deleteBeerAction, (state: BeerState, arg: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => beer.id !== arg.id),
  }))
);
