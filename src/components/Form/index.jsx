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
              <input type="number" placeholder="1" />
              <span>R$</span>
            </section>

          </section>

          <section className="types">

            <label>Tipo de valor</label>

            <section>
              <select values={'Entrada'}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </section>

          </section>

        </section>

        <button>Inserir valor</button>

      </form>
    </>
  )
}

export default Form;