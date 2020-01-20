import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {GlobalModule} from "../global/global.module";
import { CvbuilderRoutingModule } from './cvbuilder-routing.module';
import { CvinfoComponent } from './cvinfo/cvinfo.component';
import { PaymentComponent } from './payment/payment.component';
import { OwlModule } from 'ngx-owl-carousel';

import { ImageCropperModule } from "ngx-img-cropper";
import { CvbuildsuccessComponent } from './cvbuildsuccess/cvbuildsuccess.component';
import { CvmessagesComponent } from './cvmessages/cvmessages.component';
@NgModule({
  declarations: [CvinfoComponent, PaymentComponent, CvbuildsuccessComponent, CvmessagesComponent],
  imports: [
    CommonModule,
    CvbuilderRoutingModule,
    GlobalModule,
    ImageCropperModule,
    ChartsModule,
    OwlModule
  ]
})
export class CvbuilderModule { }
