import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-management-employees',
  template: `
    <app-employee-table
      [employees]="employees"
      title="Management Employees"
      (employeeUpdated)="loadManagers()">
    </app-employee-table>
  `
})
export class ManagementEmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadManagers();
  }

  loadManagers(): void {
    this.apiService.getManagers().subscribe({
      next: (data) => {
        console.log('Received managers:', data);
        this.employees = data;
      },
      error: (err) => console.error('Error loading managers:', err)
    });
  }
}
