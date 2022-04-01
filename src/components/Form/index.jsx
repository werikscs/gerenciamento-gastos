import angleDown from '../../img/ANGLE-DOWN.svg';
import './styles.css';

const Form = () => {
  return (
    <>
      <form action="">

        <section className="form__description">
          <label className='description'>Descrição</label>
          <input type="text" placeholder="Digite aqui sua descrição" />
          <label className='example'>Ex: Compra de roupas</label>
        </section>

        <section className="form__values">

          <section className="values">

            <label>Valor</label>

            <section>
              <input type="text" placeholder="1" />
              <span>R$</span>
            </section>

          </section>

          <section className="types">

            <label>Tipo de valor</label>

            <section>
              <input type="text" placeholder="Entrada" />
              <img src={angleDown} alt="" />
            </section>

          </section>

        </section>

        <button>Inserir valor</button>

      </form>
    </>
  )
}

export default Form;