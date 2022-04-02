import Button from '../Button';
import './styles.css';

const Filters = ({listTransactions, listFiltered, setListFiltered}) => {

  const filterBy = (category) => {
    const re = RegExp(category, 'g');
    const filtered = listTransactions.filter(({type}) => re.test(type));
    setListFiltered(filtered)
  }

  return (
    <section className="filters">

      <span className="filters__text">Resumo Financeiro</span>

      <section className="filters__buttons">

        <Button
          className="btnHeight40 todos"
          text="Todos"
          callback={() => filterBy()}/>

        <Button
          className="btnHeight40 entradas"
          text="Entradas"
          callback={() => filterBy('Entrada')}/>

        <Button
          className="btnHeight40 despesas"
          text="Despesas"
          callback={() => filterBy('Despesa')}/>

      </section>

    </section>
  )
}

export default Filters;