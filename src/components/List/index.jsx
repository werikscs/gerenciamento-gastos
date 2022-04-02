import Card from '../Card';
import CardEmpty from '../CardEmpty';
import './styles.css';

const List = () => {
  return (
    <ul className="card-list">
      <CardEmpty/>
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
      />
      {/* <Card/> */}
    </ul>
  )
}

export default List;