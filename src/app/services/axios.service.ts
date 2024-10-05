import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor(private http: HttpClient) {}

  getAuthToken(): string | null {
    return JSON.parse(window.localStorage.getItem('auth_token') as string);
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem('auth_token', JSON.stringify(token));
    } else {
      window.localStorage.removeItem('auth_token');
    }
  }

  removeToken() {
    window.localStorage.removeItem('auth_token');
  }

  request(method: string, url: string, data: any): Promise<any> {
    const requestUrl = environment.baseUrl + url;

    let headers = {};

    if (this.getAuthToken() !== null) {
      headers = { Authorization: 'Bearer ' + this.getAuthToken() };
    }

    // if (method === 'POST') {
    return this.http.post(requestUrl, data, { headers: headers }).toPromise();
    // }
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
