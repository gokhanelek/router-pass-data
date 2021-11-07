import { NgModule } from '@angular/core';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OverviewComponent, DashboardComponent],
  imports: [
    OverviewRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class OverviewModule { }
