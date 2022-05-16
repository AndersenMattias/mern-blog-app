import Button from 'components/Button/Button';

import { IPost, PostProps } from 'interfaces/post';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <Link key={post._id} to={`/post-details/${post._id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt='post-img'
          height='140'
          image={post.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button type='button' color='primary'>
            Share{' '}
          </Button>
          <Button type='button' color='primary'>
            {' '}
            Read more
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default Post;
