import { IPost } from 'interfaces/post';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { postReduxState } from 'redux/features/post-slice';

const PostDetails = () => {
  const { id } = useParams();
  const posts = useSelector(postReduxState);
  console.log(posts);
  let post = posts.posts.find((x) => x._id == id);
  console.log(post);

  return (
    <div>
      <h4>{post?.title}</h4>
      <img src={post?.image} alt='post-img' />
      <p>Author: {post?.author}</p>
      Categories:{' '}
      {post?.categories.map((cat) => (
        <p>{cat}</p>
      ))}
      <p>Created{post?.createdAt.toString().split('T')[0]}</p>
    </div>
  );
};

export default PostDetails;
