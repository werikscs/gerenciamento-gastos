import './styles.css';

const Button = ({callback, text, bgColor}) => {
  return (
    <button className={bgColor} onClick={callback}>{text}</button>
  )
}

export default Button;