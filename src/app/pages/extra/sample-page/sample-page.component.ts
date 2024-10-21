import { EmployeeStatus } from './../../../entity/employeestatus';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Designations } from 'src/app/entity/designation';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/entity/employee';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
  styleUrls: ['./sample-page.component.scss']
})
export class AppSamplePageComponent implements OnInit, AfterViewInit {

  employee!: Employee;

  // public empForm: FormGroup;
  public form: FormGroup;
  genders = ['Male', 'Female'];

  designations: Designations[] = [
    { id: 1, name: 'Manager' },
    { id: 2, name: 'Security' }
  ];

  employeestatuses: EmployeeStatus[] = [
    { id: 1, name: 'active' },
    { id: 2, name: 'retired' },
    { id: 2, name: 'leave' }
  ];

  add() {

  }

  clear() {

  }

  update() {

  }

  delete() {

  }

  constructor(private _empService: EmployeeService) {
    const today = new Date();
    //  alert(today.getTime())
    const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // Minimum age: 18 years

    this.form = new FormGroup({
      // photo: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
       nic: new FormControl('',[Validators.required,Validators.pattern(/^\d{9}[vV|xX]$|^\d{12}$/ )]),
      address: new FormControl(''),
     // designation: new FormControl('', [Validators.required]),
      //land: new FormControl('', [Validators.required]),
      //employeestatus: new FormControl('', [Validators.required]),
      // mobile: new FormControl('',[Validators.required]),
      // gender: new FormControl('',[Validators.required]),
      // dob: new FormControl('', [Validators.required, Validators.max(2024-11-11),Validators.min(minDate.getTime())] )// Date must be at least 18 years old

    });


    // this.empForm = new FormGroup({
    //   firstName : new FormControl('',[Validators.required,Validators.pattern('^[A-Z][a-z]+$')]),
    //   lastName : new FormControl('',[Validators.required,Validators.pattern('^[A-Z][a-z]+$')]),
    //   nic : new FormControl('',[Validators.required,Validators.pattern(/^\d{9}[vV|xX]$|^\d{12}$/ )]),
    //   age : new FormControl('',Validators.pattern(/^(18|[2-5]\d|60)$/)),
    //   description : new FormControl(''),
    //   salary : new FormControl('',[Validators.required,
    //     Validators.pattern(/^\b(20000|[2-4][0-9]{5}|50000[0]{0,1}|5000[0-9]{1}|5[0-9]{4}|500000)\b/)]),
    //   gender: new FormControl('',Validators.required),

    // });
  }



  ngOnInit(): void {
    // You can initialize other things here if needed
  }

  onFormSubmit() {
    this.employee = this.form.getRawValue();
    // this._empService.addEmployee(this.employee)
    //   (result) => {
    //     console.log(result);
    //   },
    //   error=>{
    //     console.log(error);
    //   }
    // )

    let addstatus:boolean=false;
      let addmessage:string="Server Not Found";
    this._empService.addEmployee(this.employee).then((responce: [] | undefined) => {
      console.log("Res-" + responce);
      console.log("Un-" + responce == undefined);

      if (responce != undefined) {
        // @ts-ignore
        console.log("Add-" + responce['id'] + "-" + responce['url'] + "-" + (responce['errors'] == ""));

        // @ts-ignore
        addstatus = responce['errors'] == "";
        console.log("Add Sta-" + addstatus);

        if (!addstatus) { // @ts-ignore
          addmessage = responce['errors'];
        }
      }
      else {
        console.log("undefined");
        addstatus = false;
        addmessage = "Content Not Found"
      }
    }).finally(() => {
      if (addstatus) {
        addmessage = "Successfully Saved";
      }
    }
  )}


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
