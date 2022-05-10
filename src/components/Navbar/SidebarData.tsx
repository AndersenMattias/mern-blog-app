import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
    icon: <HomeIcon style={{ color: 'green' }} />,
    cName: 'nav-text',
  },
  {
    title: 'My Page',
    path: '/my-page',
    icon: <AccountBoxIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <PeopleIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <MessageIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <ContactSupportIcon />,
    cName: 'nav-text',
  },
];
