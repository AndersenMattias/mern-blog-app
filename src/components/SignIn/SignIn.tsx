import BootstrapBtn from 'components/BootstrapBtn/BootstrapBtn';
import { ISignIn, Props } from 'interfaces/interfaces';
import { Container } from 'react-bootstrap';

const SignIn = ({ toggleLogin }: ISignIn) => {
  return (
    <Container style={{ textAlign: 'right' }}>
      <input type='text' value={'E-mail'} />
      <input type='text' value={'Password'} />
      <BootstrapBtn
        type='button'
        text='Logga in'
        variant='primary'
        onClick={toggleLogin}
      />
    </Container>
  );
};

export default SignIn;
