import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { AlertService } from '../../services/alert.service';
import { Department } from '../Department';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  model: any = {};
  loading = false;
  submitted = false;
  returnUrl: string;
  deptId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private departmentService: DepartmentService,
    private alertService: AlertService, private _location: Location, private _avRoute: ActivatedRoute, private department: Department) {

    if (this._avRoute.snapshot.params["id"]) {
      this.deptId = this._avRoute.snapshot.params["id"];
    }
  }

  ngOnInit() { debugger; this.getDepartment(this.deptId); }

  goBack() {
    this._location.back();
  }

  getDepartment(id: number) {
    this.departmentService.getDepartmentById(id)
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

