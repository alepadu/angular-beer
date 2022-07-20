import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { allBeerTypes, BeerForm } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css'],
})
export class BeerFormComponent implements OnInit {
  types: string[];
  beerForm: FormGroup<BeerForm>;
  constructor() {
    this.types = allBeerTypes;
  }
  ngOnInit() {
    this.beerForm = this.initForm();
  }
  private initForm(): FormGroup<BeerForm> {
    return new FormGroup<BeerForm>({
      beerName: new FormControl(null, Validators.required),
      beerStyle: new FormControl(null, Validators.required),
      upc: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }
}
