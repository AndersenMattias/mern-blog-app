import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Copyright = (props: any) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <a color='inherit' href='https://mattias-andersen.com/'>
        Mattias Andersen
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
