import './styles.css';

const TotalMoney = ({listTransactions}) => {

  const calcTotalMoney = () => {
    if(listTransactions.length){
      return listTransactions.reduce((acc,{value}) => {
        return Number(acc) + Number(value);
      }, 0)
    } else {
      return 0;
    }
  }

  const totalMoney = calcTotalMoney();
  const totalMoneyFormatted = totalMoney.toLocaleString('pt-br', {minimumFractionDigits: 2});

  return (
    <section className="totalMoney">
      <section className="totalMoney__text">
        <span className="text__bold">Valor total:</span>
        <span className="text__detail">O valor se refere ao saldo</span>
      </section>
      <span className="totalMoney__number">R$ {(totalMoneyFormatted)}</span>
    </section>
  )
}

export default TotalMoney;