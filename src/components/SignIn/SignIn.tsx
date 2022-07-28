import Button from 'components/Button/Button';
import { ISignIn } from 'interfaces/interfaces';

const SignIn = ({ toggleLogin }: ISignIn) => {
  return (
    <div style={{ textAlign: 'right' }}>
      <input type='text' value={'E-mail'} />
      <input type='text' value={'Password'} />
      <Button colour='btn--primary' onClick={toggleLogin}>
        {' '}
        Logga in{' '}
      </Button>
    </div>
  );
};

export default SignIn;
