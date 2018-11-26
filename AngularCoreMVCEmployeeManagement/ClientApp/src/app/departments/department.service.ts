import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../services/http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { Department } from './Department';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class DepartmentService {
  myAppUrl = 'api/Departments/';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CommonService');
  }


  getDepartments() {
    return this.http.get<Department[]>(this.myAppUrl + '/Getdepartments')
      .pipe(
        catchError(this.handleError('getDepartments', []))
      );
  }

  getDepartmentById(id: number): Observable<Department[]> {
    return this.http.get<Department[]>(this.myAppUrl + '/Details/' + id)
      .pipe(
        catchError(this.handleError('getDepartmentById', []))
      );
  }


  saveDepartment(Department: Department): Observable<Department> {

    return this.http.post<Department>(this.myAppUrl + '/Create', JSON.stringify(Department), httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );

  }

  updateDepartment(id: number, Department: Department): Observable<Department> {
    return this.http.put<Department>(this.myAppUrl + '/Update/' + id, JSON.stringify(Department), httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );
  }

  deleteDepartment(id: number): Observable<Department> {
    return this.http.delete<Department>(this.myAppUrl + '/DeleteDepartment/' + id, httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );
  }
}
