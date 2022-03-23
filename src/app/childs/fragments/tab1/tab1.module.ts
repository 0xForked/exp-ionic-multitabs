import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1ChildPage } from './tab1.page';
import { Tab1ChildPageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1ChildPageRoutingModule
  ],
  declarations: [Tab1ChildPage]
})
export class Tab1ChildPageModule {}
