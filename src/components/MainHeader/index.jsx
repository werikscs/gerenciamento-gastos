import logoNuKenzieB from '../../img/Nu-Kenzie-b.svg';
import './styles.css';

const MainHeader = ({backToInitialScreen}) => {

  return (
    <header className='mainHeader'>
      <section className='mainHeader__section'>
        <img src={logoNuKenzieB} alt="" />
        <button onClick={backToInitialScreen}>Início</button>
      </section>
    </header>
  )
  
}

export default MainHeader;