import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';

export const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LocationsRoutingModule { }
