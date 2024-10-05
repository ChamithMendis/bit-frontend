import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent implements OnInit {
  data: string[] = [];
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  login: string = '';

  constructor(private router: Router, private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService
      .request('GET', '/messages', null)
      .then((response: any) => {
        this.data = response;
      });
  }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  onSubmitRegister() {
    this.axiosService
      .request('POST', '/register', {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        password: this.password,
      })
      .then((response: any) => {
        this.axiosService.setAuthToken(response.token);
        this.router.navigate(['/authentication/login']);
      });
  }
}
