import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { async, Observable } from "rxjs";
import { Employee } from "../entity/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employeeArray: Array<any> = new Array();

  constructor(private _http: HttpClient) {}

// addEmployee(data: any): Observable<any> {
// this.employeeArray.push(
//   {
//     id:this.employeeArray.length+1,
//     ...data
//   }
// );
// console.log(this.employeeArray);

//     return this._http.post('http://localhost:8080/api/employees', data);
//   }
// }

async addEmployee(employee: Employee) {
  try {
    console.log(employee);

    return await this._http.post<[]>('http://localhost:8080/employees', employee).toPromise();
  } catch (error) {
    console.error('Error adding employee:', error);
    return undefined;
  }
}

}
