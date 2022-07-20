import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { allBeerTypes, Beer, BeerForm } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css'],
})
export class BeerFormComponent implements OnInit {
  types: string[];
  beerForm: FormGroup<BeerForm>;
  constructor(private beerService: BeerService) {
    this.types = allBeerTypes;
  }
  ngOnInit() {
    this.beerForm = this.initForm();
  }
  onSubmit() {
    const formBeer = this.beerForm.value;
    const beer: Beer = {
      id: this.beerService.generateNewBeerId(),
      beerName: formBeer.beerName!,
      beerStyle: formBeer.beerStyle!,
      upc: formBeer.upc!,
      price: formBeer.price!,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
    };
    this.beerService.addBeer(beer);
  }
  private initForm(): FormGroup<BeerForm> {
    return new FormGroup<BeerForm>({
      beerName: new FormControl(null, Validators.required),
      beerStyle: new FormControl(null, Validators.required),
      upc: new FormControl(null, Validators.required),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }
}
