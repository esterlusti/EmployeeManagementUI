import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-all-employees',
  template: `
    <app-employee-table
      [employees]="employees"
      title="All Employees">
    </app-employee-table>
  `
})
export class AllEmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.apiService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
