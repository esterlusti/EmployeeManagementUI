import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { OSEmployeesComponent } from './components/os-employees/os-employees.component';
import { ManagementEmployeesComponent } from './components/management-employees/management-employees.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-employees', component: AllEmployeesComponent },
  { path: 'os-employees', component: OSEmployeesComponent },
  { path: 'management-employees', component: ManagementEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
