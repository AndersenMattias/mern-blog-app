import * as Icon from 'react-bootstrap-icons';

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
    icon: <Icon.PersonCircle />,
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
    icon: <Icon.ChatLeftDots />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Icon.QuestionCircle />,
    cName: 'nav-text',
  },
];
