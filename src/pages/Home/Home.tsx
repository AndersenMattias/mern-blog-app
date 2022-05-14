import AddLocation from 'components/AddLocation/AddLocation';
import Footer from 'components/Footer/Footer';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import PostList from 'components/PostList/PostList';

import { Container } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { postReduxState } from 'redux/features/post-slice';

const Home = (): JSX.Element => {
  const posts = useSelector(postReduxState);

  return (
    <Container>
      <NavigationBar />
      <PostList />

      <AddLocation />
      <Footer />
    </Container>
  );
};

export default Home;
