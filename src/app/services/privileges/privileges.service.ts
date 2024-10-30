import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { AxiosService } from '../axios.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrivilegesService {
  constructor(private _axiosService: AxiosService, private http: HttpClient) {}

  public getPrivilegeGroupList(): Promise<any> {
    const requestUrl = environment.baseUrl + '/privilege-groups';

    let headers = {};

    if (this._axiosService.getAuthToken() !== null) {
      headers = {
        Authorization: 'Bearer ' + this._axiosService.getAuthToken(),
      };
    }

    return this.http.get(requestUrl, { headers: headers }).toPromise();
  }

  public addPrivilegeGroup(privilegeGroup: any): Promise<any> {
    console.log(privilegeGroup);
    const requestUrl = environment.baseUrl + '/privilege-groups';

    let headers = {};

    if (this._axiosService.getAuthToken() !== null) {
      headers = {
        Authorization: 'Bearer ' + this._axiosService.getAuthToken(),
      };
    }

    return this.http
      .post(requestUrl, privilegeGroup, { headers: headers })
      .toPromise();
  }

  public editPrivilegeGroup(id: number, privilegeGroup: any): Promise<any> {
    const requestUrl =
      environment.baseUrl + '/privilege-groups/' + id.toString();

    let headers = {};

    if (this._axiosService.getAuthToken() !== null) {
      headers = {
        Authorization: 'Bearer ' + this._axiosService.getAuthToken(),
      };
    }

    return this.http
      .put(requestUrl, privilegeGroup, { headers: headers })
      .toPromise();
  }

  public deletePrivilegeGroup(id: number): Promise<any> {
    const requestUrl =
      environment.baseUrl + '/privilege-groups/' + id.toString();

    let headers = {};

    if (this._axiosService.getAuthToken() !== null) {
      headers = {
        Authorization: 'Bearer ' + this._axiosService.getAuthToken(),
      };
    }

    return this.http.delete(requestUrl, { headers: headers }).toPromise();
  }
}
