import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
// import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
usersArray: any[]=[];
  constructor(private http:HttpClient){
    this.getAllUser();
  }

  userObj: any ={
    id:'',
    firstName:'',
    lastNname:'',
    email:''
  }

  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  onSaveUser(){ 
    const obj = this.userForm.value;
    this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe((res:any)=>{
      alert("User Created");
    }); 
  }

  getAllUser(){ 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    this.usersArray = res;
    }); 
  }
  onEdit(id:number){ 
    this.http.get('https://jsonplaceholder.typicode.com/users/'+id).subscribe((res:any)=>{
    
  this.userForm = new FormGroup({
    id: new FormControl(res.id),
    firstName: new FormControl(res.name),
    lastName: new FormControl(res.username),
    email: new FormControl(res.email)
  });
    }); 
  }
       
  // data: string[] = [];
  // email: string = '';
  // firstName: string = '';
  // lastName: string = '';
  // id: string = '';

  

  ngOnInit(): void {
    // this.axiosService
    //   .request('GET', '/messages', null)
    //   .then((response: any) => {
    //     this.data = response;
    // });
  }

  // form = new FormGroup({
  //   uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  // });

  // get f() {
  //   return this.form.controls;
  // }

  // onSubmitRegister() {
  //   this.axiosService
  //     .request('POST', '/register', {
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //       login: this.login,
  //       password: this.password,
  //     })
  //     .then((response) => {
  //       this.axiosService.setAuthToken(response.data.token);
  //       this.router.navigate(['/login']);
  //     });
  // }
}
