import Form from '../Form';
import MainHeader from '../MainHeader';
import TotalMoney from '../TotalMoney';
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
        {/* List */}
      </main>
    </>
  )
}

export default MainScreen;