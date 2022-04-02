import { useState } from 'react';
import './styles.css';

const Form = ({listTransactions, setListTransactions}) => {

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('Entrada');

  const updateTransactions = (transaction) => {
    setListTransactions([...listTransactions, transaction]);
  }

  const handleData = (e) => {
    e.preventDefault();

    updateTransactions({
      description : description,
      type: type,
      value: Number(value)
    })

    setDescription('');
    setValue('');
    setType('Entrada');
  }

  return (
    <>
      <form onSubmit={handleData}>

        <section className="form__description">
          <label className='description'>Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className='example'>Ex: Compra de roupas</label>
        </section>

        <section className="form__values">

          <section className="values">

            <label>Valor</label>

            <section>
              <input
                type="number"
                placeholder="1"
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
              <span>R$</span>
            </section>

          </section>

          <section className="types">

            <label>Tipo de valor</label>

            <section>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </section>

          </section>

        </section>

        <button type='submit'>Inserir valor</button>

      </form>
    </>
  )
}

export default Form;