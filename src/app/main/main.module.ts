import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { UiModule } from '../main/ui/ui.module';
import { DataAppService} from '../data-app.service';
import { LoginComponent } from '../main/login/login.component';
import { PolicyComponent } from '../main/policy/policy.component';
import { HomeComponent } from '../main/home/home.component';
import { AuthComponent } from '../main/auth/auth.component';


const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Auth', component: AuthComponent },
  { path: 'Policy', component: PolicyComponent },
  { path: '', component: LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: []
})
export class MainModule { }
