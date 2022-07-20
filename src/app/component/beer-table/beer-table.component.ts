import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css'],
})
export class BeerTableComponent implements OnInit {
  beers: Beer[];

  constructor(public beerService: BeerService) {
    this.beers = beerService.getBeersList();
  }

  ngOnInit() {
    console.log(this.beers);
  }

  deleteBeer(item: Beer) {
    this.beerService.deleteBeer(item);
  }
}
