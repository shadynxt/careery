/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : ProfileModule                     
# Object name           : ProfileModule    
# Functionality         : set up profile module
# Purpose               : 
*******************************************************/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileviewComponent } from './profileview/profileview.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { ListComponent } from './list/list.component';

import { OwlModule } from 'ngx-owl-carousel';
import { PrivacysettingsComponent } from './privacysettings/privacysettings.component';
import { ImageCropperModule } from "ngx-img-cropper";
import { NgCircleProgressModule } from 'ng-circle-progress';
import {GlobalModule} from "../global/global.module";
import { PublicprofileComponent } from './publicprofile/publicprofile.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ControllpanelsettingsComponent } from './controllpanelsettings/controllpanelsettings.component';
import { CardbuilderComponent } from './cardbuilder/cardbuilder.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ConnectionsComponent } from './connections/connections.component';
import { BlocksComponent } from './blocks/blocks.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ShareButtonModule } from '@ngx-share/button';
import { SeemorenotificationsComponent } from './seemorenotifications/seemorenotifications.component';
import { AllInvitationsComponent } from './all-invitations/all-invitations.component';
import { AllRecommendationsComponent } from './all-recommendations/all-recommendations.component';
import { CardbuildersuccessComponent } from './cardbuildersuccess/cardbuildersuccess.component';
import { NotificationsettingsComponent } from './notificationsettings/notificationsettings.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { PreviewcvComponent } from './previewcv/previewcv.component';
import { LifetimeComponent } from './lifetime/lifetime.component';
import { MyblocklistComponent } from './myblocklist/myblocklist.component';




@NgModule({
  declarations: [ProfileviewComponent, ProfileeditComponent, ListComponent, PrivacysettingsComponent, PublicprofileComponent, TestimonialComponent, ControllpanelsettingsComponent, CardbuilderComponent, ChangepasswordComponent,  ConnectionsComponent, BlocksComponent, NotificationsComponent, SeemorenotificationsComponent, AllInvitationsComponent, AllRecommendationsComponent, CardbuildersuccessComponent, NotificationsettingsComponent, ChatHistoryComponent, PreviewcvComponent, LifetimeComponent, MyblocklistComponent],
  imports: [
    ImageCropperModule,
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    
    NgCircleProgressModule.forRoot(),
    GlobalModule,
    ShareButtonModule,
    ChartsModule
  ]
})
export class ProfileModule { }
