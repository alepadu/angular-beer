import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BeerListComponent } from '../component/beer-list/beer-list.component';
import { BeerFormComponent } from '../component/beer-form/beer-form.component';

const routes: Route[] = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BeerListComponent },
  { path: 'add', component: BeerFormComponent },
  { path: '**', component: BeerListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
