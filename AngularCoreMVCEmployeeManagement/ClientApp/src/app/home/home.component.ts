import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration_Details } from '../Registration_Details';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userid: number;
  public UserList: Registration_Details;
  constructor(private _avRoute: ActivatedRoute,
    private _registrationService: RegistrationService, private _router: Router) {

    debugger;
    if (localStorage.length > 0) {
      let item = JSON.parse(localStorage.getItem('User'));
      this.userid = item.id;
    } else {
      this._router.navigate(['/login']);
    }
  }

  ngOnInit() {

    this.getUserDetails(this.userid);
  }

  getUserDetails(id: number) {
    this._registrationService.getUserRole(id)
      .pipe(first())
      .subscribe(
        data => {
      
          this.UserList = data;
        },
        error => {
          console.log(error + ' while fetching data ' + id);
        });
  }
  Logout() {
    debugger;
    let key = 'User';
    localStorage.removeItem(key);
    this._router.navigate(['/login']);
  }
}
