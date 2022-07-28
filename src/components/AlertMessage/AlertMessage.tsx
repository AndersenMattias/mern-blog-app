interface IAlertProps {
  heading: string;
  text: string;
}

const AlertMessage = ({ heading, text }: IAlertProps) => {
  return (
    <div>
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AlertMessage;
