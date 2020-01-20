import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CvinfoComponent } from './cvinfo/cvinfo.component';
import { PaymentComponent } from './payment/payment.component';
import { CvbuildsuccessComponent } from './cvbuildsuccess/cvbuildsuccess.component';
import { CvmessagesComponent } from './cvmessages/cvmessages.component';
const routes: Routes = [
  {
    path:'cv',
    children : [
      { path : "build",  canActivate: [AuthGuard], component : CvinfoComponent },
      { path : "pay", canActivate: [AuthGuard], component : PaymentComponent },
      { path : "success/:token", canActivate: [AuthGuard], component : CvbuildsuccessComponent },
      { path : "consulting/:id", canActivate: [AuthGuard], component : CvmessagesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvbuilderRoutingModule { }
