enum ButtonTypes {
    'button',
    'submit',
    'reset',
}
interface IButtonProps   {
    text: string;
    type: ButtonTypes | undefined;
    onClick(): void;
    btnStyle: string;
}

const STYLES = [
    'btn--primary',
    'btn--warning',
    'btn--danger',
    'btn--success',
    'btn--dark',
    'btn--primary--outline',
    'btn--warning--outline',
    'btn--danger--outline',
    'btn--success--outline',
]

const Button = ({text, type, onClick, btnStyle}: IButtonProps): JSX.Element => {

    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]

  return (
    <button className={`btn ${checkBtnStyle}`}  onClick={onClick} >{text}</button>
  )
}

export default Button