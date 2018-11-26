import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AlertService } from '../services/alert.service';
import { CommonService } from '../services/common.service';
import { MessageService } from '../services/message.service';
import { HttpErrorHandler } from '../services/http-error-handler.service';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { AppComponent } from '../app.component';
import { DepartmentService } from '../departments/department.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditEmployeeComponent, AddEmployeeComponent, ViewEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpErrorHandler, MessageService, AlertService, CommonService,
    EmployeeService, Employee, DepartmentService],
  bootstrap: [AppComponent]
})
export class EmployeesModule { }
