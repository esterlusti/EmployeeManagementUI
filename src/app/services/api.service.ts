import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7028/api/Employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/ActiveEmployees`);
  }

  getManagers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/Managers`);
  }

  getContractors(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/OSEmployees`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: string, employee: Employee): Observable<void> {
    console.log('updateEmployee - 0000000 - דייסה', id, employee);
    return this.http.put<void>(`${this.apiUrl}/${id}`, employee);
  }
}
