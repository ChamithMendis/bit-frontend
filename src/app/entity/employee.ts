export class Employee{
  public id!: number;
  public name!: string;
  public number!: string;
  public nic!: string;
  public address!: string;

  constructor(id: number, name: string, number: string, nic: string, address: string) {
   this.id = id;
    this.name = name;
    this.number = number;
    this.nic = nic;
    this.address = address;
  }
}
