import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { RegistrationService } from '../services/registration.service';
import { Registration_Details } from '../Registration_Details';
import { debug } from 'util';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  debugger;
  model: any = {};

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private registrationService: RegistrationService,
    private alertService: AlertService, private registration: Registration_Details) {

    if (localStorage.length > 0) {
      this.router.navigate(['/']);
    } else {
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }




  onSubmit() {
    this.loading = true;
    this.registrationService.ValidateUserLogin(this.model)
      .pipe(first())
      .subscribe(
        data => {
      
          this.registration = data;
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/home']);
          let key = 'User';
          let myObj = { id: this.registration.id, role: this.registration.role };
          localStorage.setItem(key, JSON.stringify(myObj));
        },
        error => {
      
          if (error.status == "404")
            alert("Invalid UserName and Password");

          console.log(error + ' while posting data ' + this.model)
          this.alertService.error(error);
          this.loading = false;
        });

  }
}
