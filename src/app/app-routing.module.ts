import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '',  redirectTo:'authentication' },
  {path:"authentication" , loadChildren:()=>import('./authentication/authentication.module').then(mod=>mod.AuthenticationModule)},
  {path:"pages",loadChildren:()=>import('./pages/pages.module').then(mod=>mod.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
