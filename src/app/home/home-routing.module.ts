/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : HomeRoutingModule                     
# Object name           : HomeRoutingModule    
# Functionality         : set all routes for home module
# Purpose               : 
*******************************************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfileChartComponent } from './profile-chart/profile-chart.component';
const routes: Routes = [
  {
    path : '',
    component : LandingComponent
  },
  
  { path : "user/chart/:userCPP",   component : ProfileChartComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
