import { Routes } from '@angular/router';
import { SystemPrivilegesComponent } from './system-privileges/system-privileges.component';

export const PrivilegesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system-privileges',
        component: SystemPrivilegesComponent,
      },
    ],
  },
];
