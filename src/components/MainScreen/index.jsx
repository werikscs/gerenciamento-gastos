import logoNuKenzieB from '../../img/Nu-Kenzie-b.svg';

const MainScreen = ({goToInitialScreen}) => {

  const backToInitialScreen = () => {
    goToInitialScreen(true)
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