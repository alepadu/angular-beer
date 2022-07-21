import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './component/beer-list/beer-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BeerFormComponent } from './component/beer-form/beer-form.component';
import { BeerTableComponent } from './component/beer-table/beer-table.component';
import { BeerComponent } from './component/beer/beer.component';
import { StoreModule } from '@ngrx/store';
import { beerReducers } from './store/reducer';
import { AppState } from './model/state';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot<AppState>({
      beerState: beerReducers,
    }),
  ],
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerFormComponent,
    BeerTableComponent,
    BeerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
