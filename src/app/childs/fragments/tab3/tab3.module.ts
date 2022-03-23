import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3ChildPage } from './tab3.page';

import { Tab3ChildPageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3ChildPageRoutingModule,
  ],
  declarations: [Tab3ChildPage]
})
export class Tab3ChildPageModule {}
