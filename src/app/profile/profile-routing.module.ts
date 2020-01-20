/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : ProfileRoutingModule                     
# Object name           : ProfileRoutingModule    
# Functionality         : set up profile module routes
# Purpose               : 
*******************************************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import {SetupprofileGuard} from '../setupprofile.guard';
import {ProfileGuard} from './profile.guard';
import { ProfileviewComponent } from './profileview/profileview.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { ListComponent } from './list/list.component';
import { PrivacysettingsComponent } from './privacysettings/privacysettings.component';
import { PublicprofileComponent } from './publicprofile/publicprofile.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ControllpanelsettingsComponent } from './controllpanelsettings/controllpanelsettings.component';
import { CardbuilderComponent } from './cardbuilder/cardbuilder.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ConnectionsComponent } from './connections/connections.component';
import { BlocksComponent } from './blocks/blocks.component';
import { SeemorenotificationsComponent } from './seemorenotifications/seemorenotifications.component';
import { AllInvitationsComponent } from './all-invitations/all-invitations.component';
import { AllRecommendationsComponent } from './all-recommendations/all-recommendations.component';
import { CardbuildersuccessComponent } from './cardbuildersuccess/cardbuildersuccess.component';
import { NotificationsettingsComponent } from './notificationsettings/notificationsettings.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { LifetimeComponent } from './lifetime/lifetime.component';
import { MyblocklistComponent } from './myblocklist/myblocklist.component';
const routes: Routes = [
  {
    path : "profile",
    canActivate: [SetupprofileGuard],
    children : [
      { path : "",  canActivate: [AuthGuard], component : ProfileviewComponent },
      { path : "edit", canActivate: [AuthGuard], component : ProfileeditComponent },

    ]
  },
  
  // { path : "user/chart/:userCPP",   component : ProfileChartComponent },
  {
    path : "testimonial",
    pathMatch: 'full',
    canActivate: [AuthGuard, SetupprofileGuard],
    component: TestimonialComponent
  },
  {
    path : "search",
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path : "privacy-settings",
    pathMatch: 'full',
    canActivate: [AuthGuard, SetupprofileGuard],
    component: PrivacysettingsComponent
  },
  {
    path : "notification-settings",
    pathMatch: 'full',
    canActivate: [AuthGuard, SetupprofileGuard],
    component: NotificationsettingsComponent
  },
  
  {
    path : "control-panel-settings",
    pathMatch: 'full',
    canActivate: [AuthGuard, SetupprofileGuard],
    component: ControllpanelsettingsComponent
  },
  {
    path : "card/build",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: CardbuilderComponent
  },
  {
    path : "card/success/:token",
    canActivate: [AuthGuard,SetupprofileGuard],
    component: CardbuildersuccessComponent
  },
  {
    path : "change-password",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: ChangepasswordComponent
  },
  {
    path : "connections",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: ConnectionsComponent
  },

  {
    path : "blocks",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: BlocksComponent
  },

  {
    path : "notifications",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: SeemorenotificationsComponent
  },

  {
    path : "invitations",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: AllInvitationsComponent
  },

  {
    path : "recommendations",
    canActivate: [AuthGuard, SetupprofileGuard],
    component: AllRecommendationsComponent
  },  
  {
    path : "chat-histroy",
    canActivate:[AuthGuard, SetupprofileGuard],
    component : ChatHistoryComponent
  },
  {
    path: 'my-blocks',
    canActivate: [AuthGuard, SetupprofileGuard],
    component: MyblocklistComponent
  },
  { path : "lifetime",   component : LifetimeComponent },
  { path : ":userCPP",   component : PublicprofileComponent, canActivate:[ProfileGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
