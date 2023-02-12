import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../authentication/Services/auth-guard.service';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {path: "", component: PagesComponent, canActivate: [AuthGuard], children: [
    // {path: "", redirectTo: "/home", pathMatch:"full"},
    // {path: 'home', loadChildren: () => import('./Home/home-module.module').then(m => m.HomeModuleModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
