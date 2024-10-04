import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AxiosService } from '../services/axios.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private axiosService: AxiosService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authToken = this.axiosService.getAuthToken();
    if (authToken) {
      return true;
    }
    this.router.navigate(['/authentication/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
