import Card from '../Card';
import CardEmpty from '../CardEmpty';
import './styles.css';

const List = ({listTransactions}) => {

  const cardList = listTransactions.map(({description, type, value}, i) => {
    return (
      <Card
        key={i}
        description={description}
        cost={value.toLocaleString('pt-br', {minimumFractionDigits: 2})}
        type={type}
      />
    )
  });

  return (
    <ul className="card-list">
      {
        cardList.length ?
          cardList
          :
          ( 
            [
              <p>Você ainda não possui nenhum lançamento</p>,
              <CardEmpty/>,
              <CardEmpty/>,
              <CardEmpty/>
            ]
          )
      }
    </ul>
  )
}

export default List;