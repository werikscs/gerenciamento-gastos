import Button from '../Button';
import './styles.css';

const Filters = () => {
  return (
    <section className="filters">
      <span className="filters__text">Resumo Financeiro</span>
      <section className="filters__buttons">
        <Button className="btnHeight40 todos" text="Todos"/>
        <Button className="btnHeight40 entradas" text="Entradas"/>
        <Button className="btnHeight40 despesas" text="Despesas"/>
      </section>
    </section>
  )
}

export default Filters;