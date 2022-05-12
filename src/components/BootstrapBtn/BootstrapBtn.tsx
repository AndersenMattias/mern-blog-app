import { Button } from 'react-bootstrap';

enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined,
}
interface IButtonProps {
  text: string;
  type: any;
  onClick?: () => void;
  variant: string;
}

const STYLES = [
  'primary',
  'secondary',
  'danger',
  'success',
  'warning',
  'danger',
];

const BootstrapBtn = ({
  text,
  type = 'button',
  onClick,
  variant,
}: IButtonProps): JSX.Element => {
  const checkBtnStyle = STYLES.includes(variant) ? variant : STYLES[0];

  return (
    <Button type={type} variant={checkBtnStyle} onClick={onClick}>
      {text}
    </Button>
  );
};

export default BootstrapBtn;
