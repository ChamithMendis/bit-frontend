import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  toasts: { message: string; duration: number; type: 'success' | 'error' }[] =
    [];

  constructor(private toastrService: ToastrService) {}

  showSuccess(message: string, duration: number = 3000) {
    this.toastrService.success('Scucess!', message, {
      timeOut: duration,
    });
  }

  showError(message: string, duration: number = 3000) {
    this.toastrService.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
}
