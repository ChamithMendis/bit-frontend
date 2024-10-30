import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-privilege-groups',
  standalone: false,
  templateUrl: './privilege-groups.component.html',
  styleUrl: './privilege-groups.component.scss',
})
export class PrivilegeGroupsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'groupName',
    'groupDescription',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog // private _empService: EmployeeService, // private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    // this.getPrivilegeGroupList();
  }

  openAddEditEmpForm() {
    // const dialogRef = this._dialog.open(EmpAddEditComponent);
    // dialogRef.afterClosed().subscribe({
    //   next: (val) => {
    //     if (val) {
    //       this.getEmployeeList();
    //     }
    //   },
    // });
  }

  getEmployeeList() {
    // this._empService.getEmployeeList().subscribe({
    //   next: (res) => {
    //     this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //   },
    //   error: console.log,
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    // this._empService.deleteEmployee(id).subscribe({
    //   next: (res) => {
    //     this._coreService.openSnackBar('Employee deleted!', 'done');
    //     this.getEmployeeList();
    //   },
    //   error: console.log,
    // });
  }

  openEditForm(data: any) {
    // const dialogRef = this._dialog.open(EmpAddEditComponent, {
    //   data,
    // });
    // dialogRef.afterClosed().subscribe({
    //   next: (val) => {
    //     if (val) {
    //       this.getEmployeeList();
    //     }
    //   },
    // });
  }
}
