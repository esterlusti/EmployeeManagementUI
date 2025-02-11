import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee?: Employee;
  @Output() submitForm = new EventEmitter<Employee>();
  @Output() cancelEdit = new EventEmitter<void>();

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', [Validators.required]],
      role: ['', Validators.required],
      managerId: [''],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    if (this.employee) {
      this.employeeForm.patchValue({
        name: this.employee.name,
        id: this.employee.idNumber,
        role: this.employee.roleId,
        managerId: this.employee.managerId,
        isActive: this.employee.isActive
      });
      this.employeeForm.get('id')?.disable();
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.getRawValue();
      const employeeData: Employee = {
        name: formValue.name,
        idNumber: formValue.id,
        roleId: formValue.role,
        managerId: formValue.managerId || undefined,
        isActive: formValue.isActive
      };
      this.submitForm.emit(employeeData);
    }
  }

  get nameControl() { return this.employeeForm.get('name'); }
  get idControl() { return this.employeeForm.get('idNumber'); }
  get roleControl() { return this.employeeForm.get('roleId'); }
}
