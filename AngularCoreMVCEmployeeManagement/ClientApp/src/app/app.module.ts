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
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { DepartmentService } from './departments/department.service';
import { EmployeeService } from './employees/employee.service';
import { Department } from './departments/Department';
import { Employee } from './employees/employee';
import { RegistrationService } from './services/registration.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    ViewDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [HttpErrorHandler, MessageService, AlertService, CommonService,
    DepartmentService, EmployeeService, RegistrationService,
    Employee, Department, Registration_Details],
  bootstrap: [AppComponent]
})
export class AppModule { }
