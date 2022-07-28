import Button from 'components/Button/Button';

import { IPost, PostProps } from 'interfaces/post';
import { Link } from 'react-router-dom';

const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <Link key={post._id} to={`/post-details/${post._id}`}>
      <div>
        <img src={post.image} alt='post-img' height='140' />
        <div>
          <h5>{post.title}</h5>
        </div>
        <div>
          <Button type='button' colour='btn--primary' text='share' />

          <Button type='button' colour='btn--primary' text=' Read more' />
        </div>
      </div>
    </Link>
  );
};

export default Post;
