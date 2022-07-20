import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer, BeerStyle } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  public beers: Beer[] = beersData;
  constructor() {}

  getBeersList() {
    return this.beers;
  }
  deleteBeer(item: Beer) {
    this.beers = this.beers.filter((beer) => beer.id !== item.id);
  }
  generateNewBeerId(): number {
    const maxId = Math.max(...this.beers.map((beer) => beer.id));
    return maxId + 1;
  }
  addBeer(beer: Beer) {
    this.beers.unshift(beer);
  }
}
