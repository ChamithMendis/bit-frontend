import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

class Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public isActive: boolean,
    public type = 'Type A',
    public revenue: number | null = 0
  ) { }
}

@Component({
  selector: 'app-angularforms',
  templateUrl: './angularforms.component.html',
  styleUrl: './angularforms.component.scss',
})
export class AngularformsComponent {


  emplist: string[] = ["Kamal", "Amal", "Wimal"];
  deplist!: Array<string>;

  numList: number[] = [2, 3, 5, 7, 3, 8, 7, 4, 8, 9, 5];

  swapNumbers: [num1: number, num2: number] = [1, 2]; //tuple


  funRestAdd(num1: number, num2: number, ...num3: number[]): void {
    let sum = num1 + num2 + num3.reduce((accumulator, number) => accumulator + number);
    console.log("FunRestAdd = " + sum);

  }

  funSubsctract = (num1: number, num2: number): number => {
    console.log("Funsubstract = " + (num1 - num2));
    return num1 - num2;
  };

  funAdd(num1: number, num2: number): number {
    console.log("FunAdd =" + (num1 + num2));
    return num1 + num2;
  }

  genericFunction<Type>(num1:Type, num2:Type): Type {
    //@ts-ignore
    let sum = num1 + num2;
   console.log("GenericFunction =" + sum);
    return sum;
  }

  filterList(list: number[]) {
    let filteredList = list.filter((oneElement) => oneElement > 5);
    console.log("Filtered List = "+filteredList );
    console.log( `Filtered List tilt =     ${filteredList}`); // using Tilt
  }

  findEmp(emplist: string[]): void {
    let findedEmp = emplist.find((emp) => emp === "Wimal");
    console.log("findEMp = " + findedEmp);
  }

  findSum(numList: number[]): number {
    let sum = numList.reduce((accumulator, element) => accumulator * element);
    console.log("Find Sum = "+sum);
    return 0;
  }




  public customer: Customer;
  public tripForm: FormGroup;

  public isFormSubmitted: boolean = false;

  constructor() {
    this.funRestAdd(4,4,4,3,4,3,43,4,34);
    this.funRestAdd(4,4,...this.numList);
    this.filterList(this.numList);
    this.findEmp(this.emplist);
    this.findSum(this.numList);
    this.funAdd(20, 30);
    this.genericFunction<string>("Hell", "oww");
    this.genericFunction<number>(4, 43);
    this.funSubsctract(20, 30);

    this.customer = new Customer('John', 'Doe', true, 'Type B', 500000);

    this.tripForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-z]+$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-z]+$'),
      ]),
      salary: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]+$'),
      ]),
    });
  }

  onSubmit() {
    const isFormValid = this.tripForm.valid;
    alert(isFormValid);
    this.isFormSubmitted = true;
  }
}
