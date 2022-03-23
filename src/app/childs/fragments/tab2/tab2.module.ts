import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2ChildPage } from './tab2.page';

import { Tab2ChildPageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2ChildPageRoutingModule
  ],
  declarations: [Tab2ChildPage]
})
export class Tab2ChildPageModule {}
