import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  // data: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private axiosService: AxiosService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.axiosService
    //   .request('GET', '/messages', null)
    //   .then((response: any) => {
    //     this.data = response;
    //   });
  }

  get formControl() {
    return this.registerForm?.controls;
  }

  onSubmitRegister() {
    this.submitted = true;
    if (this.registerForm?.valid) {
      this.axiosService
        .request('POST', '/register', {
          firstName: this.registerForm.value.firstName,
          lastName: this.registerForm.value.lastName,
          login: this.registerForm.value.login,
          password: this.registerForm.value.password,
        })
        .then((response: any) => {
          this.axiosService.setAuthToken(response.token);
          this.router.navigate(['/authentication/login']);
        });
    }
  }
}
