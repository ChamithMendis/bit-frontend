import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemPrivilegesComponent } from './system-privileges/system-privileges.component';
import { RouterModule } from '@angular/router';
import { PrivilegesRoutes } from './privileges.routing';

@NgModule({
  declarations: [SystemPrivilegesComponent],
  imports: [CommonModule, RouterModule.forChild(PrivilegesRoutes)],
})
export class PrivilegesModule {}
