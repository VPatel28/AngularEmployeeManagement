import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
  { path: 'employees/view/:id', component: ViewEmployeeComponent },
  { path: 'employees/add', component: AddEmployeeComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
export const routing = RouterModule.forRoot(routes);
