import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { beersData } from '../data/beer-list';
import { Beer, BeerStyle } from '../model/model';
import { beerSelectors } from '../store/selector';
import { addBeerAction, deleteBeerAction } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  public beers: Beer[] = beersData;
  constructor(private store: Store) {}

  getBeersList(): Observable<Beer[]> {
    return this.store.select(beerSelectors);
  }

  deleteBeer(item: Beer) {
    this.store.dispatch(deleteBeerAction({ id: item.id }));
  }

  generateNewBeerId(): number {
    const maxId = Math.max(...this.beers.map((beer) => beer.id));
    return maxId + 1;
  }

  addBeer(beer: Beer) {
    this.store.dispatch(addBeerAction({ beer }));
  }
}
