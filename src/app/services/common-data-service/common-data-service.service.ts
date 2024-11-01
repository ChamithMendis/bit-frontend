import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { AxiosService } from '../axios.service';

@Injectable({
  providedIn: 'root',
})
export class CommonDataServiceService implements OnInit {
  public commonDataServiceUrl = '/common-data-service/';

  constructor(private _axiosService: AxiosService, private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  public initializeComponent(): void {}

  public getAvailablePrivilegeList(
    method: string,
    url: string,
    groupId: number
  ): Promise<any> {
    const requestUrl =
      environment.baseUrl +
      this.commonDataServiceUrl +
      url +
      '/' +
      groupId.toString();

    let headers = {};

    if (this._axiosService.getAuthToken() !== null) {
      headers = {
        Authorization: 'Bearer ' + this._axiosService.getAuthToken(),
      };
    }

    if (method === 'get') {
      return this.http.get(requestUrl, { headers: headers }).toPromise();
    } else {
      return this.http.get(requestUrl, { headers: headers }).toPromise();
    }
  }

  public getAssignedPrivilegeList(
    method: string,
    url: string,
    groupId: number
  ): Promise<any> {
    const requestUrl =
      environment.baseUrl +
      this.commonDataServiceUrl +
      url +
      '/' +
      groupId.toString();

    let headers = {};

    if (this._axiosService.getAuthToken() !== null) {
      headers = {
        Authorization: 'Bearer ' + this._axiosService.getAuthToken(),
      };
    }

    if (method === 'get') {
      return this.http.get(requestUrl, { headers: headers }).toPromise();
    } else {
      return this.http.get(requestUrl, { headers: headers }).toPromise();
    }
  }
}
