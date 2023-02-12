import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './../components/header/header.component';
import { SideMenuComponent } from './../components/side-menu/side-menu.component';
import { CardsComponent } from './profile-view/cards/cards.component';
import { ProfileContentComponent } from './profile-view/profile-content/profile-content.component';
import { NavTabsComponent } from './profile-view/profile-content/nav-tabs/nav-tabs.component';
import { UserDashboardComponent } from './profile-view/profile-content/user-dashboard/user-dashboard.component';
import { ProjectsComponent } from './profile-view/profile-content/projects/projects.component';
import { ResponsibilitiesComponent } from './profile-view/profile-content/responsibilities/responsibilities.component';
import { RolesComponent } from './profile-view/profile-content/roles/roles.component';
import { RelationsComponent } from './profile-view/profile-content/relations/relations.component';
import { SubordinatesComponent } from './profile-view/profile-content/subordinates/subordinates.component';
import { AuthGuardService } from '../authentication/Services/auth-guard.service';
import { PagesService } from './pages.service';





@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SideMenuComponent,
    CardsComponent,
    ProfileContentComponent,
    NavTabsComponent,
    UserDashboardComponent,
    ProjectsComponent,
    ResponsibilitiesComponent,
    RolesComponent,
    RelationsComponent,
    SubordinatesComponent
  ],
  imports: [

  CommonModule,
    PagesRoutingModule,
  ],
  providers: [AuthGuardService, PagesService]
})
export class PagesModule { }
