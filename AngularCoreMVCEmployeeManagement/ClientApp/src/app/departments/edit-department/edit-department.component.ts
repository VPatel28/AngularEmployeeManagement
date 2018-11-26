import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { AlertService } from '../../services/alert.service';
import { Department } from '../Department';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  model: any = {};
  loading = false;
  submitted = false;
  returnUrl: string;
  deptId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private departmentService: DepartmentService,
    private alertService: AlertService, private _avRoute: ActivatedRoute, private department: Department) {

    if (this._avRoute.snapshot.params["id"]) {
      this.deptId = this._avRoute.snapshot.params["id"];
    }
  }

  ngOnInit() { debugger; this.getDepartment(this.deptId); }
onSubmit() {
  this.loading = true;
  debugger;
  this.departmentService.updateDepartment(this.deptId, this.model)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Department Added successful', true);
        this.router.navigate(['/departments']);
      },
      error => {
        console.log(error + ' while posting data ' + this.model)
        this.alertService.error(error);
        this.loading = false;
      });

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

