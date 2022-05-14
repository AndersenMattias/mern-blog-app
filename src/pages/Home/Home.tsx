import CreatePost from 'components/CreatePost/CreatePost';
import Footer from 'components/Footer/Footer';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import PostList from 'components/PostList/PostList';

import Container from '@mui/material/Container';

import { useSelector } from 'react-redux';
import { postReduxState } from 'redux/features/post-slice';

const Home = (): JSX.Element => {
  const posts = useSelector(postReduxState);

  return (
    <Container>
      <NavigationBar />
      <PostList />

      <CreatePost />
      <Footer />
    </Container>
  );
};

export default Home;
