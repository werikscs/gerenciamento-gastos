import MainHeader from '../MainHeader';
import Form from '../Form';
import TotalMoney from '../TotalMoney';
import Filters from '../Filters';
import List from '../List';

import './styles.css';

import { useState } from 'react';

const MainScreen = ({setIsOnInitialScreen}) => {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: -150 }
  ]);
  
  const backToInitialScreen = () => {
    setIsOnInitialScreen(true)
  }

  return (
    <>
      <MainHeader backToInitialScreen={backToInitialScreen}/>
      <main className='main'>
        <section className='main__form-total-money'>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney/>
        </section>
        <section className='main__filters-list'>
          <Filters/>
          <List listTransactions={listTransactions}/>
        </section>
      </main>
    </>
  )
}

export default MainScreen;