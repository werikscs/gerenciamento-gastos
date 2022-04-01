import logoNuKenzieW from '../../img/Nu-Kenzie-w.svg';
import centralizeText from '../../img/Centralize-text.svg';
import deFormaRapidaText from '../../img/de-forma-rapida-text.svg';
import circleIcon from '../../img/circle.svg';

import './styles.css';

const InitialScreen = () => {
  return (
    <section className='initialScreen'>
      <section className='initialScreenLeft'>
        {/* Nu Kenzie */}
        <img className='logo' src={logoNuKenzieW} alt="" />
        {/* Centralize... */}
        <img className='centralizeText' src={centralizeText} alt="" />
        {/* de foma rápida e segura */}
        <img className='deFormaText' src={deFormaRapidaText} alt="" />
        {/* botão iniciar */}
        <button>Iniciar</button>
      </section>

      <section className='initialScreenRight'>
        {/* circulo */}
        <img src={circleIcon} alt="" />
      </section>
    </section>
  )
}

export default InitialScreen;