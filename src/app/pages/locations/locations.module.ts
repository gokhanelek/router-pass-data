import { NgModule } from '@angular/core';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';



@NgModule({
  declarations: [LocationsComponent],
  imports: [
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
