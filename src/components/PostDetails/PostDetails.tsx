import BootstrapBtn from 'components/MUIButton/MUIButton';
import { IPost } from 'interfaces/interfaces';
import { Container } from '@mui/material';
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
    <Container>
      <h4>{post?.title}</h4>
      <img src={post?.image} alt='post-img' />
      <p>Author: {post?.author}</p>
      Categories:
      <p>Created{post?.createdAt.toString().split('T')[0]}</p>
    </Container>
  );
};

export default PostDetails;
