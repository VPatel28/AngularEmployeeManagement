import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { first } from 'rxjs/operators';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public empList: Employee[];
  userid: number;
  userRole: string;
  constructor(private _router: Router, private _employeeService: EmployeeService) {
    this.getEmployees();
    debugger;
    if (localStorage.length > 0) {
      let item = JSON.parse(localStorage.getItem('User'));
      this.userid = item.id;
      this.userRole = item.role;
    } else {
      this._router.navigate(['/login']);
    }
  }

  ngOnInit() { debugger; }

  getEmployees() {
    this._employeeService.getEmployees()
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.empList = data;
        },
        error => {
          console.log(error + ' while fetching data ');
        });
  }

  delete(id: number) {
    debugger;
    if (confirm("Are you sure want to delete this record with id "+ id +" ?")) {
      this._employeeService.deleteEmployee(id)
        .pipe(first())
        .subscribe(
          data => {
            debugger;
            window.location.reload()
          },
          error => {
            console.log(error + ' while fetching data ');
          });
    }
  }
  

}


