import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { AlertService } from './services/alert.service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Registration_Details } from './Registration_Details';
import { HomeComponent } from './home/home.component';
import { CommonService } from './services/common.service';
import { RegistrationService } from './services/registration.service';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    HomeModule
  ],
  providers: [HttpErrorHandler, MessageService, AlertService, CommonService,
    RegistrationService, Registration_Details],
  bootstrap: [AppComponent]
})
export class AppModule { }
