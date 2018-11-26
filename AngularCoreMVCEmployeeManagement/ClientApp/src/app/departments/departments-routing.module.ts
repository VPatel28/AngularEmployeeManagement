import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';


const routes: Routes = [
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departments/add', component: AddDepartmentComponent },
  { path: 'departments/view/:id', component: ViewDepartmentComponent },
  { path: 'departments/edit/:id', component: EditDepartmentComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
export const routing = RouterModule.forRoot(routes);
