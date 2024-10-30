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
import { TestComponent } from '../test/test.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrivilegeGroupsComponent } from './privilege-groups/privilege-groups.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    SystemPrivilegesComponent,
    PrivilegeGroupsComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PrivilegesRoutes),
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
})
export class PrivilegesModule {}
