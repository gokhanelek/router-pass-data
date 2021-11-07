import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { MainNavbarComponent } from '../layouts/main-navbar/main-navbar.component';





@NgModule({
    imports: [
        PagesRoutingModule,
        SharedModule
    ],
    declarations: [
        PagesComponent,
        MainNavbarComponent
    ],
})
export class PagesModule { }
