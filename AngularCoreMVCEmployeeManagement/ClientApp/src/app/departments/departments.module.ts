import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { DepartmentService } from './department.service';
import { Department } from './Department';
import { CommonService } from '../services/common.service';
import { AlertService } from '../services/alert.service';
import { MessageService } from '../services/message.service';
import { HttpErrorHandler } from '../services/http-error-handler.service';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditDepartmentComponent, ViewDepartmentComponent, AddDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpErrorHandler, MessageService, AlertService, CommonService, DepartmentService, Department],
  bootstrap: [AppComponent]
})
export class DepartmentsModule { }
