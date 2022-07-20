import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor() {}

  ngOnInit() {}
}
