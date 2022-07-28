import CreatePost from 'components/CreatePost/CreatePost';
import Footer from 'components/Footer/Footer';
import PostList from 'components/PostList/PostList';

import { useSelector } from 'react-redux';
import { postReduxState } from 'redux/features/post-slice';

const Home = (): JSX.Element => {
  const posts = useSelector(postReduxState);

  return (
    <>
      <PostList />

      <CreatePost />
      <Footer />
    </>
  );
};

export default Home;
