import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
