import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UiModule } from '../app/main/ui/ui.module';
import { DataAppService} from '../app/data-app.service';
import { LoginComponent } from '../app/main/login/login.component';
import { PolicyComponent } from '../app/main/policy/policy.component';
import { HomeComponent } from '../app/main/home/home.component';
import { AuthComponent } from '../app/main/auth/auth.component';


const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Auth', component: AuthComponent },
  { path: 'Policy', component: PolicyComponent },
  { path: '', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolicyComponent,
    HomeComponent,
    AuthComponent,
  ], 
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    UiModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
