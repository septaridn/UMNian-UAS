import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPostPageRoutingModule } from './my-post-routing.module';

import { MyPostPage } from './my-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPostPageRoutingModule
  ],
  declarations: [MyPostPage]
})
export class MyPostPageModule {}
