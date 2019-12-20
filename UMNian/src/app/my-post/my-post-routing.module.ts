import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPostPage } from './my-post.page';

const routes: Routes = [
  {
    path: '',
    component: MyPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPostPageRoutingModule {}
