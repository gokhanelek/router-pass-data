import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
    { path: 'home', component: PagesComponent },
    {
        path: '',
        component: PagesComponent,
        data: {
            title: 'Overview'
        },
        loadChildren: () => import('../pages/overview/overview.module').then(m => m.OverviewModule)
    },
    {
        path: '',
        component: PagesComponent,
        data: {
            title: 'Locations'
        },
        loadChildren: () => import('../pages/locations/locations.module').then(m => m.LocationsModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    // exports: [RouterModule]
})
export class PagesRoutingModule { }
