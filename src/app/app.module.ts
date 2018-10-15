import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { DataAppService} from '../app/data-app.service';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolicyComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    UiModule,
  ],
  providers: [DataAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
