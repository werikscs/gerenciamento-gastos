import MainHeader from '../MainHeader';
import Form from '../Form';
import TotalMoney from '../TotalMoney';
import Filters from '../Filters';
import List from '../List';

import './styles.css';

import { useState } from 'react';

const MainScreen = ({setIsOnInitialScreen}) => {

  const [listTransactions, setListTransactions] = useState([]);

  const [listFiltered, setListFiltered] = useState([]);
  
  const backToInitialScreen = () => {
    setIsOnInitialScreen(true)
  }

  return (
    <>
      <MainHeader backToInitialScreen={backToInitialScreen} />

      <main className='main'>

        <section className='main__form-total-money'>

          <Form
            listTransactions={listTransactions}
            listFiltered={listFiltered}
            setListTransactions={setListTransactions}
            setListFiltered={setListFiltered} />

          <TotalMoney listTransactions={listTransactions} />

        </section>

        <section className='main__filters-list'>

          <Filters
            listTransactions={listTransactions}
            setListFiltered={setListFiltered} />

          <List
            listFiltered={listFiltered}
            listTransactions={listTransactions}
            setListFiltered={setListFiltered} 
            setListTransactions={setListTransactions}/>

        </section>

      </main>

    </>
  )
}

export default MainScreen;