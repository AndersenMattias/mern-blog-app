import BootstrapBtn from 'components/BootstrapBtn/BootstrapBtn';
import { IPost } from 'interfaces/interfaces';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { postReduxState } from 'redux/features/post-slice';

const PostDetails = () => {
  const { id } = useParams();
  const posts = useSelector(postReduxState);
  console.log(posts);
  let post = posts.posts.find((x) => x._id == id);

  return (
    <Container>
      <h4>{post?.title}</h4>
      <img src={post?.image} alt='post-img' />
      <p>{post?.createdBy}</p>
      <p>{post?.categories}</p>
    </Container>
  );
};

export default PostDetails;
