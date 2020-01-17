import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { ViewBadgeComponent } from './view-badge/view-badge.component'

import { QRCodeModule } from 'angularx-qrcode';
import { RouterModule, Routes } from '@angular/router';
import { ViewBadgeServiceService } from './view-badge/view-badge-service.service';
/*
const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  { 
    path: 'view/:uuid', 
    component: ViewBadgeComponent ,
    data: { title: 'View Badge' }
  },
  {
    path: 'verify/:uuid',
    component: ViewBadgeComponent,
    data: { title: 'Compliance Status', isBadgeVerification: true }
  },
  { path: '',
    redirectTo: '/view/60cb29fa-fc05-4331-a2cc-095d4ba66e24',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }

];*/


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    QRCodeModule, 
    HttpClientModule
  /*  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )*/
  ],
  declarations: [ AppComponent, ViewBadgeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ViewBadgeServiceService]
})
export class AppModule { }
