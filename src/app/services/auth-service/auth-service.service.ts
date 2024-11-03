import { Injectable } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private _messageService: MessageServiceService,
    private router: Router
  ) {}

  public checkAuthorization(authId: number): boolean {
    const authIdArray: [any] = JSON.parse(
      window.localStorage.getItem('privileges')!
    );

    const authStatus = authIdArray.includes(authId.toString());

    if (!authStatus) {
      this._messageService.showError(
        'User is not authorize to access requested page'
      );
    }
    return authStatus;
  }
}
