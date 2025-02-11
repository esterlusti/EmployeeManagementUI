import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { OSEmployeesComponent } from './components/os-employees/os-employees.component';
import { ManagementEmployeesComponent } from './components/management-employees/management-employees.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllEmployeesComponent,
    OSEmployeesComponent,
    ManagementEmployeesComponent,
    EmployeeTableComponent,
    NavigationComponent,
    FooterComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
