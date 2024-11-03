import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { TestRoutes } from './test.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from '../authentication/employee/employee.component';
import { TestComponent } from './test/test.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TestRoutes),
    MaterialModule,
    MatFormFieldModule,
    TooltipModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons)
  ],
  declarations: [
 AngularformsComponent,
 RoomsComponent,
 EmployeeComponent,
 TestComponent
  ],
})
export class TestModule {}
