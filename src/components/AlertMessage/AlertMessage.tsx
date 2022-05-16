import Alert, { AlertProps, AlertColor } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

type Severity = 'error' | 'success' | 'info' | 'warning' | undefined;

interface IAlertProps {
  alertTitle: string;
  text: string;
  severity: Severity;
}

const AlertMessage = ({ severity, alertTitle, text }: IAlertProps) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant='outlined' severity={severity}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {text}
      </Alert>
    </Stack>
  );
};

export default AlertMessage;
