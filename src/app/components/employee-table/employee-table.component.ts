import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @Input() employees: Employee[] = [];
  @Input() title: string = '';
  @Output() employeeUpdated = new EventEmitter<void>();

  showForm = false;
  selectedEmployee?: Employee;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  showAddForm(): void {
    this.selectedEmployee = undefined;
    this.showForm = true;
  }

  editEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    this.showForm = true;
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.apiService.deleteEmployee(id).subscribe({
        next: () => {
          this.employees = this.employees.filter(emp => emp.idNumber !== id);
          this.employeeUpdated.emit();
        },
        error: (error) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete employee');
        }
      });
    }
  }

  handleFormSubmit(employee: Employee): void {
    if (this.selectedEmployee) {
      this.apiService.updateEmployee(employee.idNumber, employee).subscribe({
        next: () => {
          const index = this.employees.findIndex(emp => emp.idNumber === employee.idNumber);
          if (index !== -1) {
            this.employees[index] = employee;
          }
          this.showForm = false;
          this.employeeUpdated.emit();
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          alert('Failed to update employee');
        }
      });
    } else {
      this.apiService.createEmployee(employee).subscribe({
        next: (newEmployee) => {
          this.employees.push(newEmployee);
          this.showForm = false;
          this.employeeUpdated.emit();
        },
        error: (error) => {
          console.error('Error creating employee:', error);
          alert('Failed to create employee');
        }
      });
    }
  }

  handleFormCancel(): void {
    this.showForm = false;
    this.selectedEmployee = undefined;
  }
}
