import MainHeader from '../MainHeader';
import './styles.css';

const MainScreen = ({setIsOnInitialScreen}) => {

  const backToInitialScreen = () => {
    setIsOnInitialScreen(true)
  }

  return (
    <>
      <MainHeader backToInitialScreen={backToInitialScreen}/>
      <main>

      </main>
    </>
  )
}

export default MainScreen;