import * as Icon from '@mui/icons-material';

interface ISidebarData {
  title: string;
  path: string;
  icon: any;
  cName: string;
}

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon.House style={{ color: 'green' }} />,
    cName: 'nav-text',
  },
  {
    title: 'My Page',
    path: '/my-page',
    icon: <Icon.AccountCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <Icon.People />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon.Message />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Icon.HelpOutline />,
    cName: 'nav-text',
  },
];
