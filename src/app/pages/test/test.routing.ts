import { Routes } from '@angular/router';


// pages

import { RoomsComponent } from 'src/app/pages/test/rooms/rooms.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { EmployeeComponent } from '../authentication/employee/employee.component';
import { TestComponent } from './test/test.component';

export const TestRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'AngularForms',
        component: AngularformsComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      },
    ],
  },
];
