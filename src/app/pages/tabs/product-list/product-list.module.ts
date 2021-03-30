import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { MyModalPageModule } from 'src/app/modals/my-modal/my-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule,
    MyModalPageModule
  ],
  declarations: [ProductListPage]
})
export class ProductListPageModule {}
