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
    auth: authenticationEnum.Home_Badge,
    isVisible: false,
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'poker-chip',
    auth: authenticationEnum.Home_Chips,
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
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
    isVisible: true,
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
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
    auth: authenticationEnum.Home, // change this
    isVisible: true,
  },
  {
    displayName: 'System Privileges',
    iconName: 'layout-dashboard',
    route: '/privileges/system-privileges',
    isVisible: true,
  },
  {
    displayName: 'Privilege Groups',
    iconName: 'layout-dashboard',
    route: '/privileges/privilege-groups',
    isVisible: true,
  },
  // {
  //   displayName: 'System Test',
  //   iconName: 'layout-dashboard',
  //   route: '/privileges/system-test',
  // },
];
