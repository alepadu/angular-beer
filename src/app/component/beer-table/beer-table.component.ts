import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css'],
})
export class BeerTableComponent implements OnInit {
  beers: Beer[];
  @Output() cliccato = new EventEmitter<Beer>();
  beerList: Observable<Beer[]>;

  constructor(public beerService: BeerService) {
    this.beerList = beerService.getBeersList();
  }

  ngOnInit() {
    console.log(this.beers);
  }

  deleteBeer(item: Beer) {
    this.beerService.deleteBeer(item);
  }
}
