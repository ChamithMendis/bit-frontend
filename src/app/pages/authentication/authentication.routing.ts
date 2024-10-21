import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { AngularformsComponent } from './angularforms/angularforms.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'angularForms',
        component: AngularformsComponent,
      }

    ],
  },
];
