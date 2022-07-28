const Copyright = (): JSX.Element => {
  return (
    <h5>
      {'Copyright © '}
      <a href='https://mattias-andersen.com/'>Mattias Andersen</a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </h5>
  );
};

export default Copyright;
