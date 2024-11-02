import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';
import { CacheService } from 'src/app/services/CacheService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(
    public dialog: MatDialog,
    private axiosService: AxiosService,
    private router: Router,
    private cacheService: CacheService
  ) {}

  public logOutUser(): void {
    this.axiosService.removeToken();
    this.cacheService.clear(this.axiosService.getUserId()!);
    this.router.navigate(['/authentication/login']);
  }
}
