import './styles.css';

const TotalMoney = () => {
  return (
    <section className="totalMoney">
      <section className="totalMoney__text">
        <span className="text__bold">Valor total:</span>
        <span className="text__detail">O valor se refere ao saldo</span>
      </section>
      <span className="totalMoney__number">$ 8456</span>
    </section>
  )
}

export default TotalMoney;