import logoNuKenzieB from '../../img/Nu-Kenzie-b.svg';

const MainScreen = ({setIsOnInitialScreen}) => {

  const backToInitialScreen = () => {
    setIsOnInitialScreen(true)
  }

  return (
    <>
      <header>
        <section>
          <img src={logoNuKenzieB} alt="" />
          <button onClick={backToInitialScreen}>Início</button>
        </section>
      </header>
      <main>

      </main>
    </>
  )
}

export default MainScreen;