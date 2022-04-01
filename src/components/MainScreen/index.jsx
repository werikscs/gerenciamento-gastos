import MainHeader from '../MainHeader';
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
          {/* form */}
          {/* total money */}
        </section>
        {/* List */}
      </main>
    </>
  )
}

export default MainScreen;