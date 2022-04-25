import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './Components/add-edit-employee/add-edit-employee.component';
import { EmployeesComponent } from './Components/employees/employees.component';

const routes: Routes = [
  { path: 'Employees', component: EmployeesComponent },
  { path: 'add-edit-employee/:empID', component: AddEditEmployeeComponent },
  { path: 'add-edit-employee', component: AddEditEmployeeComponent },

  { path: '', redirectTo: 'Employees', pathMatch: 'full' },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
