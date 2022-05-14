import BootstrapBtn from 'components/MUIButton/MUIButton';
import { ISignIn } from 'interfaces/interfaces';
import { Container } from '@mui/material';

const SignIn = ({ toggleLogin }: ISignIn) => {
  return (
    <Container style={{ textAlign: 'right' }}>
      <input type='text' value={'E-mail'} />
      <input type='text' value={'Password'} />
      <BootstrapBtn
        type='button'
        text='Logga in'
        btnStyle='primary'
        onClick={toggleLogin}
      />
    </Container>
  );
};

export default SignIn;
