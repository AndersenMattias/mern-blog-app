import {
  Button as MuiButton,
  ButtonProps,
  makeStyles,
} from '@material-ui/core';

import { PropTypes } from '@mui/material';

interface IButtonProps extends ButtonProps {
  sx?: object | boolean | Function | object;
  color: PropTypes.Color | undefined;
}

const Button = ({
  variant,
  color,
  children,
  size,
  disabled,
}: IButtonProps): JSX.Element => {
  return (
    <MuiButton variant={variant} color={color} size={size} disabled={disabled}>
      {children}
    </MuiButton>
  );
};

export default Button;
