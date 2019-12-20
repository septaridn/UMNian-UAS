import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'news',
    children: [
      {
        path: '',
        loadChildren: './news/news.module#NewsPageModule'
      },
      {
        path: ':newsId',
        loadChildren: './news/news-detail/news-detail.module#NewsDetailPageModule'
      }
    ]
  },

  { path: 'saved', loadChildren: './saved/saved.module#SavedPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'my-post', loadChildren: './my-post/my-post.module#MyPostPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }