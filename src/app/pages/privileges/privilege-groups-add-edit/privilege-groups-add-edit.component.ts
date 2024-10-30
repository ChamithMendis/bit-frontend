import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PrivilegesService } from 'src/app/services/privileges/privileges.service';

@Component({
  selector: 'app-privilege-groups-add-edit',
  standalone: false,
  templateUrl: './privilege-groups-add-edit.component.html',
  styleUrl: './privilege-groups-add-edit.component.scss',
})
export class PrivilegeGroupsAddEditComponent {
  privilegeGroupForm: FormGroup;

  operation = 'Add';

  constructor(
    private _fb: FormBuilder,
    private _privilegesService: PrivilegesService,
    private _dialogRef: MatDialogRef<PrivilegeGroupsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // private _coreService: CoreService
  ) {
    this.privilegeGroupForm = this._fb.group({
      groupName: '',
      groupDescription: '',
    });
  }

  ngOnInit(): void {
    this.privilegeGroupForm.patchValue(this.data);
  }

  public onFormSubmit(): void {
    try {
      if (!this.privilegeGroupForm.valid) {
        console.log('Form is not valid');
        return;
      }

      if (this.data) {
        // edit logic
      } else {
        this._privilegesService
          .addPrivilegeGroup(this.privilegeGroupForm.value)
          .then((response: any) => {
            console.log(response);
            // handle response
            this._dialogRef.close(true);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
