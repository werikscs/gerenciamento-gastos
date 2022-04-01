import { useState } from 'react';
import './App.css';

import InitialScreen from './components/InitialScreen';
import MainScreen from './components/MainScreen';

function App() {

  const [isOnInitialScreen, setIsOnInitialScreen] = useState(false);

  const toggleScreen = (setIsOnInitialScreen) => {
    return (
      isOnInitialScreen ?
      <InitialScreen goToMainScreen={setIsOnInitialScreen}/>
      :
      <MainScreen goToInitialScreen={setIsOnInitialScreen}/>
    )
  }

  return (
    <div className="App">
      {toggleScreen(setIsOnInitialScreen)}
    </div>
  );
}

export default App;
