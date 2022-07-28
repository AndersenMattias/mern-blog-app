import { BsHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { AiOutlineMessage, AiOutlineQuestionCircle } from 'react-icons/ai';

interface ISidebarData {
  title: string;
  path: string;
  icon: any;
  cName: string;
}

export const SidebarData: ISidebarData[] = [
  {
    title: 'Home',
    path: '/',
    icon: <BsHouseFill style={{ color: 'green' }} />,
    cName: 'nav-text',
  },
  {
    title: 'My Page',
    path: '/my-page',
    icon: <MdOutlineAccountCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <BsFillPeopleFill />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <AiOutlineMessage />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <AiOutlineQuestionCircle />,
    cName: 'nav-text',
  },
];
