import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerTableComponent implements OnInit {
  @Input() beers: Beer[];
  constructor() {}

  ngOnInit() {}
}
