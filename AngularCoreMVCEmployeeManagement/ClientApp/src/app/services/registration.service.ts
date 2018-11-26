import { Injectable, Inject } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Registration_Details } from '../Registration_Details';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {


  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('RegistrationService');
  }

  ValidateUserLogin(user: Registration_Details): Observable<Registration_Details> {

    return this.http.post<Registration_Details>('api/Common/ValidateLogin', JSON.stringify(user), httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );
  }

  getUserRole(id: number): Observable<Registration_Details> {
    return this.http.get<Registration_Details>('api/Common/GetUserRole/' + id)
      .pipe(
      catchError(e => throwError(e))
    );
  }


  AddUserDetails(user: Registration_Details): Observable<Registration_Details> {

    return this.http.post<Registration_Details>('api/Common/RegisterUser', JSON.stringify(user), httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );


  }


}
