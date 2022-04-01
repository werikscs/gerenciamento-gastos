import './styles.css';

const Button = ({callback, bgColor}) => {
  return (
    <button className={bgColor} onClick={callback}></button>
  )
}

export default Button;