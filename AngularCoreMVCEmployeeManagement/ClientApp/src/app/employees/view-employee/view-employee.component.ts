import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { EmployeeService } from '../employee.service';
import { FormBuilder } from '@angular/forms';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../departments/department.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  model: any = {};
  // registerForm: FormGroup;
  loading = false;
  submitted = false;
  empId: number;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private alertService: AlertService, private employee: Employee, private _avRoute: ActivatedRoute, private _departmentService: DepartmentService) {

    if (this._avRoute.snapshot.params["id"]) {
      this.empId = this._avRoute.snapshot.params["id"];
      this.getEmployees(this.empId);
    }
  }

  ngOnInit(){ }

getEmployees(id: number) {
  this.employeeService.getEmployeeById(id)
    .pipe(first())
    .subscribe(
      data => {
        debugger;
        this.model = data;
      },
      error => {
        console.log(error + ' while fetching data ');
      });
}
}
