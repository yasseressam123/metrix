import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { subordinateReducer } from './store/reducers/subordinate.reducers';
import { SubordinateEffects } from './store/effects/subordinate.effects';
import { InterceptorsService } from './services/interceptors.service';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';




export function tokenGetter(){
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
      }
    }),
    StoreModule.forRoot({subordinates: subordinateReducer}),
    EffectsModule.forRoot([SubordinateEffects]),
    RouterModule.forRoot([{path:'', component: LoaderComponent}])
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorsService , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
