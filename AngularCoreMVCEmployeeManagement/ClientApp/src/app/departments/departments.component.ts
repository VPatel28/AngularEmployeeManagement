import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { Department } from './Department';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { debug } from 'util';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public DeptList: Department[];

  constructor(private _router: Router, private _departmentService: DepartmentService) {
    this.getDepartments();
  }

  ngOnInit() { debugger; }

  getDepartments() {
    this._departmentService.getDepartments()
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.DeptList = data;
        },
        error => {
          console.log(error + ' while fetching data ');
        });
  }

  delete(id: number) {
    debugger;
    this._departmentService.deleteDepartment(id)
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
