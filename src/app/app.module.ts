import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './component/beer-list/beer-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BeerFormComponent } from './component/beer-form/beer-form.component';
import { BeerTableComponent } from './component/beer-table/beer-table.component';
import { BeerComponent } from './component/beer/beer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
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
