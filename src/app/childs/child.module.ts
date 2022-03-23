import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildPageRoutingModule } from './child-routing.module';
import { ChildsPage } from './child.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChildPageRoutingModule
  ],
  declarations: [ChildsPage]
})
export class ChildPageModule {}
