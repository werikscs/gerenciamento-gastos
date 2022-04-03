import './styles.css';
import noCardImg from '../../img/NoCard.png'

const CardEmpty = () => {
  return (
    <section className="empty-card">

      <img src={noCardImg} alt="" />

    </section>
  )
}

export default CardEmpty;