import Card from '../Card';
import CardEmpty from '../CardEmpty';
import './styles.css';

const List = ({listTransactions}) => {

  const cardList = listTransactions.map(({description, type, value}, i) => {
    return (
      <Card
        key={i}
        description={description}
        cost={value}
        type={type}
      />
    )
  });

  return (
    <ul className="card-list">
      {cardList}
      {/* <CardEmpty/>
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Entrada'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Despesa'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Entrada'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Entrada'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Entrada'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Despesa'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Entrada'
      />
      <Card
        description='Salário - Mês Dezembro'
        cost='6.660,00'
        type='Entrada'
      /> */}
      {/* <Card/> */}
    </ul>
  )
}

export default List;