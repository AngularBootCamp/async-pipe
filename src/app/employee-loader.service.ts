import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com';

export interface Employee {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoaderService {
  constructor(private http: HttpClient) {}

  loadEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(apiUrl + '/employees')
      .pipe(map(employees => employees.slice(0, 5)));
  }
}
