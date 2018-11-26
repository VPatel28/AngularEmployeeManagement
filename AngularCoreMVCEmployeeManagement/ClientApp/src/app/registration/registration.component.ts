import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { Registration_Details } from '../Registration_Details';
import { debug } from 'util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: any = {};
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
    private alertService: AlertService, private registration: Registration_Details) {
  }

  ngOnInit() { }



  onSubmit() {
    this.loading = true;

    this.registrationService.AddUserDetails(this.model)
      .pipe(first())
      .subscribe(
        data => {
      
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error + ' while posting data ' + this.model)
          this.alertService.error(error);
          this.loading = false;
        });

  }
}
 
