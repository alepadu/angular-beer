import { Beer } from './model';

export interface AppState {
  beerState: BeerState;
}

interface BeerState {
  list: Beer[];
}
