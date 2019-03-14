import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { IEmployee } from './Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(private httpClient: HttpClient) { }
  
  baseUrl = ' http://localhost:3000/employees';

  getAllEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.baseUrl)
    .pipe(catchError(this.handleError));
  }

  handleError(err: any){
    console.log(err);
    return throwError('Error thrown');
  }
}