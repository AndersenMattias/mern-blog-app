import Post from 'components/Post/Post';

import { useSelector } from 'react-redux';
import { postReduxState } from 'redux/features/post-slice';

const PostList = (): JSX.Element => {
  const posts = useSelector(postReduxState);

  if (posts.posts.length > 1) {
    return (
      <>
        {posts.posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </>
    );
  } else {
    return <p>No posts to be found!</p>;
  }
};

export default PostList;
