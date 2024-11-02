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
    navCap: 'Ui Components',
    isVisible: false,
  },
  {
    displayName: 'Badge',
    iconName: 'rosette',
    isVisible: false,
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'poker-chip',
    isVisible: false,
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list',
    route: '/ui-components/lists',
    isVisible: false,
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
    isVisible: false,
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
    isVisible: false,
  },
  {
    navCap: 'Auth',
    isVisible: false,
    auth: authenticationEnum.Auth,
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
    auth: authenticationEnum.Auth_Login,
    isVisible: true,
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
    auth: authenticationEnum.Auth_Register,
    isVisible: true,
  },
  {
    navCap: 'Extra',
    isVisible: true,
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
    isVisible: true,
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
    isVisible: true,
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
    isVisible: true,
  },
  {
    displayName: 'Privilege Groups',
    iconName: 'layout-dashboard',
    route: '/privileges/privilege-groups',
    auth: authenticationEnum.Privilege_Groups,
    isVisible: true,
  },
  // {
  //   displayName: 'System Test',
  //   iconName: 'layout-dashboard',
  //   route: '/privileges/system-test',
  // },
];
