import MainHeader from '../MainHeader';
import Form from '../Form';
import TotalMoney from '../TotalMoney';
import Filters from '../Filters';
import List from '../List';

import './styles.css';

const MainScreen = ({setIsOnInitialScreen}) => {

  const backToInitialScreen = () => {
    setIsOnInitialScreen(true)
  }

  return (
    <>
      <MainHeader backToInitialScreen={backToInitialScreen}/>
      <main className='main'>
        <section className='main__form-total-money'>
          <Form/>
          <TotalMoney/>
        </section>
        <section className='main__filters-list'>
          <Filters/>
          <List/>
        </section>
      </main>
    </>
  )
}

export default MainScreen;