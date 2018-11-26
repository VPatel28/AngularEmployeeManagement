import { Injectable } from '@angular/core';
import { Registration_Details } from '../Registration_Details';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = 'api/Common/';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CommonService');
  }

 

  getUserDetails(userid: number): Observable<Registration_Details[]> {
    return this.http.get<Registration_Details[]>(this.apiUrl + '/getUserDetails/' + userid)
      .pipe(
      catchError(this.handleError('getUserDetails', []))
      );
  }


  
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

}
