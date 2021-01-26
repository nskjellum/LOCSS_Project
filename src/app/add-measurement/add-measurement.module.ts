import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddMeasurementPage } from './add-measurement.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddMeasurementPage }])
  ],
  declarations: [AddMeasurementPage]
})
export class AddMeasurementPageModule {}
