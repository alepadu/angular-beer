import { Component, OnInit } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  selectedBeer: Beer;
  beerList: Observable<Beer[]>;

  constructor(public beerService: BeerService) {
    this.beerList = this.beerService.getBeersList();
  }

  ngOnInit() {}
  ngOnDestroy() {
    //console.log('Component BeerList destroyed');
  }

  mihannocliccato(beer: Beer) {
    this.selectedBeer = beer;
    //console.log(beer);
  }

  goBack() {
    this.selectedBeer = null;
  }
}
