import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();

  login: string = '';
  password: string = '';

  constructor(private router: Router, private axiosService: AxiosService) {}

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      login: this.login,
      password: this.password,
    });

    this.axiosService
      .request('POST', '/login', {
        login: this.login,
        password: this.password,
      })
      .then((response) => {
        this.axiosService.setAuthToken(response.data.token);
        this.router.navigate(['/dashboard']);
      });
  }
}
