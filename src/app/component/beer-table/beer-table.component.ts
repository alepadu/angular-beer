import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css'],
})
export class BeerTableComponent implements OnInit {
  @Input() beers: Beer[];
  constructor() {}

  ngOnInit() {}
}
