import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EmployeesComponent } from '../employees/employees.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { MessageService } from '../services/message.service';
import { HttpErrorHandler } from '../services/http-error-handler.service';
import { AlertService } from '../services/alert.service';
import { CommonService } from '../services/common.service';
import { RegistrationService } from '../services/registration.service';
import { Registration_Details } from '../Registration_Details';
import { AppComponent } from '../app.component';
import { EmployeesModule } from '../employees/employees.module';
import { DepartmentsModule } from '../departments/departments.module';

@NgModule({
  declarations: [EmployeesComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EmployeesModule,
    DepartmentsModule
  ],
  providers: [HttpErrorHandler, MessageService, AlertService, CommonService,
    RegistrationService, Registration_Details],
  bootstrap: [AppComponent]
})
export class HomeModule { }
