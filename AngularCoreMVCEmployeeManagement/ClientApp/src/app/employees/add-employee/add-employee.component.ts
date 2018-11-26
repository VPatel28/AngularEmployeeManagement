import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AlertService } from '../../services/alert.service';
import { Employee } from '../employee';
import { first } from 'rxjs/operators';
import { Department } from '../../departments/Department';
import { DepartmentService } from '../../departments/department.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  model: any = {};
  // registerForm: FormGroup;

  public departmentList: Department[];

  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private alertService: AlertService, private employee: Employee, private _departmentService: DepartmentService) {
  }

  ngOnInit() { debugger; this.getDepartments(); }
  onSubmit() {
    this.loading = true;
    debugger;
    this.employeeService.saveEmployee(this.model)
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.alertService.success('Employee Added successful', true);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error + ' while posting data ' + this.model)
          this.alertService.error(error);
          this.loading = false;
        });

  }

  getDepartments() {
    this._departmentService.getDepartments()
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.departmentList = data;
        },
        error => {
          console.log(error + ' while fetching data ');
        });
  }
}
