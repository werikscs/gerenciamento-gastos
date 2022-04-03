import Card from '../Card';
import CardEmpty from '../CardEmpty';
import './styles.css';

const List = ({listFiltered, setListFiltered, listTransactions, setListTransactions}) => {

  const deleteCard = (idToDelete) => {
    const newListTransactions = listTransactions.filter(({id}) => {
      return id !== idToDelete
    })
    // console.log(newListTransactions, idToDelete)
    setListTransactions([...newListTransactions]);
    setListFiltered([...newListTransactions]);
  }

  const cardList = listFiltered.map(({description, type, value, id}, i) => {
    return (
      <Card
        key={i}
        id={id}
        description={description}
        cost={value.toLocaleString('pt-br', {minimumFractionDigits: 2})}
        type={type}
        callback={deleteCard}
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