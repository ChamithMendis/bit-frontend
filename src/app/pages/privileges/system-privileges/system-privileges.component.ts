import { Component } from '@angular/core';

@Component({
  selector: 'app-system-privileges',
  standalone: false,
  templateUrl: './system-privileges.component.html',
  styleUrl: './system-privileges.component.scss',
})
export class SystemPrivilegesComponent {
  constructor() {
    console.log('Hellow');
  }
}
