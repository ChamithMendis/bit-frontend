import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {
    axios.defaults.baseURL = environment.baseUrl;
    axios.defaults.headers.post['Content-type'] = 'application/json';
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem('auth_token');
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem('auth_token', token);
    } else {
      window.localStorage.removeItem('auth_token');
    }
  }

  setAuthUser(userData: any) {
    if (userData !== null) {
      window.localStorage.setItem('auth_user', JSON.stringify(userData));
    }
  }

  getAuthUser() {
    return JSON.parse(window.localStorage.getItem('auth_user') as string);
  }

  removeToken() {
    window.localStorage.removeItem('auth_token');
  }

  request(method: string, url: string, data: any) {
    let headers = {};

    if (this.getAuthToken() !== null) {
      headers = { Authorization: 'Bearer ' + this.getAuthToken() };
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });
  }

  get isLoggedIn() {
    if (window.localStorage.getItem('auth_token')) {
      return true;
    }
    return false;
  }

  public logOut(): void {
    this.request('GET', '/logout', {}).then((response) => {
      window.localStorage.removeItem('auth_token');
    });
  }
}
