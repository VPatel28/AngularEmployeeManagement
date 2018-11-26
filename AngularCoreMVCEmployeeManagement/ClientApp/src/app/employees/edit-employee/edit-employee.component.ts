import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AlertService } from '../../services/alert.service';
import { Employee } from '../employee';
import { Department } from '../../departments/Department';
import { DepartmentService } from '../../departments/department.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  ngOnInit() {
  
  }
  public departmentList: Department[];
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
    this.getDepartments();
    if (this._avRoute.snapshot.params["id"]) {
      this.empId = this._avRoute.snapshot.params["id"];
      this.getEmployees(this.empId);
    }
  }



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

  onSubmit() {
    this.loading = true;
    debugger;
    this.employeeService.updateEmployee(this.empId, this.model)
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
