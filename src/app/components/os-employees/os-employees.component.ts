import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-os-employees',
  template: `
    <app-employee-table
      [employees]="employees"
      title="OS Employees"
      (employeeUpdated)="loadOSEmployees()">
    </app-employee-table>
  `
})
export class OSEmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadOSEmployees();
  }

  loadOSEmployees(): void {
    this.apiService.getContractors().subscribe({
      next: (data) => {
        console.log('Received OS employees:', data);
        this.employees = data;
      },
      error: (err) => console.error('Error loading OS employees:', err)
    });
  }
}
