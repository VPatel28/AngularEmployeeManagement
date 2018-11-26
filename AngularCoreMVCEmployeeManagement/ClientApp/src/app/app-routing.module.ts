import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/:id', component: ViewEmployeeComponent },
  { path: 'employees/view/:id', component: ViewEmployeeComponent },
  { path: 'departments/add', component: AddDepartmentComponent },
  { path: 'departments/view/:id', component: ViewDepartmentComponent },
  { path: 'departments/edit/:id', component: EditDepartmentComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);
