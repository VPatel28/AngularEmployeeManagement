import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { AlertService } from '../../services/alert.service';
import { Department } from '../Department';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  model: any = {};
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private departmentService: DepartmentService,
    private alertService: AlertService, private department: Department) {
  }

  ngOnInit() { debugger; }
  onSubmit() {
    this.loading = true;

    this.departmentService.saveDepartment(this.model)
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
}
