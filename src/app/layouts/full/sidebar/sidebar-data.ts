import { NavItem } from './nav-item/nav-item';
import { authenticationEnum } from '../../../guards/auth.enum';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
    auth: authenticationEnum.Home,
    isVisible: false,
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    auth: authenticationEnum.Home_Dashboard,
    isVisible: false,
    route: '/dashboard',
  },
  {
    navCap: 'Users',
    auth: authenticationEnum.Users,
    isVisible: false,
  },
  {
    navCap: 'Privileges',
    auth: authenticationEnum.Privileges, // change this
    isVisible: true,
  },
  {
    displayName: 'System Privileges',
    iconName: 'layout-dashboard',
    route: '/privileges/system-privileges',
    auth: authenticationEnum.System_Privileges,
    isVisible: false,
  },
  {
    displayName: 'Privilege Groups',
    iconName: 'layout-dashboard',
    route: '/privileges/privilege-groups',
    auth: authenticationEnum.Privilege_Groups,
    isVisible: false,
  },
  {
    displayName: 'System Test',
    iconName: 'layout-dashboard',
    route: '/privileges/system-test',
    auth: authenticationEnum.Test,
    isVisible: false
  },
];
