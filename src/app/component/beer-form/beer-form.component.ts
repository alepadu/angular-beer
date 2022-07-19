import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css'],
})
export class BeerFormComponent implements OnInit {
  types: string[];
  constructor(private beerService: BeerService) {
    //this.types = beerService.getBeerTypes();
    this.types = ['ALE', 'PALE_ALE', 'STOUT'];
  }
  ngOnInit() {}
}
