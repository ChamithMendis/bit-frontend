import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PrivilegesService } from 'src/app/services/privileges/privileges.service';
import { PrivilegeGroupsAddEditComponent } from '../privilege-groups-add-edit/privilege-groups-add-edit.component';
import { AddRemoveTableComponent } from '../../add-remove-table/add-remove-table.component';

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

  rightPanelStyle: any = {};
  selectedRecord: any;

  constructor(
    private _dialog: MatDialog,
    private _privilegesService: PrivilegesService // private _empService: EmployeeService, // private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    try {
      this.getPrivilegeGroupList();
      this.closeContextMenu();
    } catch (error) {
      console.log(error);
    }
  }

  public setPrivilegesGroupList(groupListDetails: any[]) {
    try {
      if (groupListDetails.length <= 0) {
        return;
      }

      this.dataSource = new MatTableDataSource(groupListDetails);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } catch (error) {
      console.log(error);
      this.handleCatch();
    }
  }

  public openPrivilegeGroupAddEditClick(): void {
    try {
      const dialogRef = this._dialog.open(PrivilegeGroupsAddEditComponent);
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getPrivilegeGroupList();
          }
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  public onEditPrivilageGroupClick(data: any): void {
    const dialogRef = this._dialog.open(PrivilegeGroupsAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPrivilegeGroupList();
        }
      },
    });
  }

  public onDeletePrivilageGroupClick(id: number, data: any): void {
    try {
      this._privilegesService
        .deletePrivilegeGroup(id, data)
        .then((response) => {
          console.log(response);
          this.getPrivilegeGroupList();
        });
    } catch (error) {
      console.log(error);
    }
  }

  public handleCatch(): void {
    this.dataSource = new MatTableDataSource([{}]);
    this.dataSource.sort = null;
    this.dataSource.paginator = null;
  }

  getPrivilegeGroupList() {
    try {
      this._privilegesService.getPrivilegeGroupList().then((response: any) => {
        this.setPrivilegesGroupList(response);
      });
    } catch (error) {
      console.log(error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  detectRightMouseClick($event: any, privilegeGroup: any) {
    if ($event.which === 3) {
      this.rightPanelStyle = {
        display: 'block',
        position: 'absolute',
        'left.px': $event.clientX,
        'top.px': $event.clientY,
      };
      this.selectedRecord = privilegeGroup;
    }
  }

  closeContextMenu() {
    this.rightPanelStyle = {
      display: 'none',
    };
  }
  onAddRemovePrivilegesClick() {
    try {
      const dialogRef = this._dialog.open(AddRemoveTableComponent, {
        height: '600px',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getPrivilegeGroupList();
          }
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  onAddRemoveUsersClick() {}
}
