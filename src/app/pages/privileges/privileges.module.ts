import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemPrivilegesComponent } from './system-privileges/system-privileges.component';
import { RouterModule } from '@angular/router';
import { PrivilegesRoutes } from './privileges.routing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SystemPrivilegesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PrivilegesRoutes),
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class PrivilegesModule {}
