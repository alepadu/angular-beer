import { Component, OnInit } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  constructor(public beerService: BeerService) {
    this.beers = beerService.getBeersList();
  }

  ngOnInit() {}
  ngOnDestroy() {
    console.log('Component BeerList destroyed');
  }
}
