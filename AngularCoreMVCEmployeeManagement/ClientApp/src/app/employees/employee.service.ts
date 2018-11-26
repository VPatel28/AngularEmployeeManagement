import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../services/http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { EmployeesComponent } from './employees.component';
import { Employee } from './employee';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})



export class EmployeeService {
  myAppUrl = 'api/Employees/';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CommonService');
  }


  getEmployees() {
    return this.http.get<Employee[]>(this.myAppUrl + '/Getemployees')
      .pipe(
        catchError(this.handleError('getEmployees', []))
      );
  }

  getEmployeeById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.myAppUrl + '/Details/' + id)
      .pipe(
        catchError(this.handleError('getEmployeeById', []))
      );
  }


  saveEmployee(employee: Employee): Observable<Employee> {
    debugger;
    return this.http.post<Employee>(this.myAppUrl + '/Create', JSON.stringify(employee), httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );

  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.myAppUrl + '/Update/' + id, JSON.stringify(employee), httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.myAppUrl + '/DeleteEmployee/' + id, httpOptions)
      .pipe(
        catchError(e => throwError(e))
      );
  }
}
