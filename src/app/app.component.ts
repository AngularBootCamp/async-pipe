import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Employee,
  EmployeeLoaderService
} from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [AsyncPipe]
})
export class AppComponent {
  employees: Observable<Employee[]>;

  constructor(svc: EmployeeLoaderService) {
    this.employees = svc.loadEmployees();
  }
}
