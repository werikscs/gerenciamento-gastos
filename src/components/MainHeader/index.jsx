import logoNuKenzieB from '../../img/Nu-Kenzie-b.svg';
import './styles.css';
import Button from '../Button';

const MainHeader = ({backToInitialScreen}) => {

  return (
    <header className='mainHeader'>
      <section className='mainHeader__section'>
        <img src={logoNuKenzieB} alt="" />
        <Button callback={backToInitialScreen} text="Início" bgColor="grey"/>
      </section>
    </header>
  )
  
}

export default MainHeader;