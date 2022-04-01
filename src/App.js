import { useState } from 'react';
import './App.css';

import InitialScreen from './components/InitialScreen';
import MainScreen from './components/MainScreen';

function App() {

  const [isOnInitialScreen, setIsOnInitialScreen] = useState(true);

  const toggleScreen = (setIsOnInitialScreen) => {
    return (
      isOnInitialScreen ?
      <InitialScreen setIsOnInitialScreen={setIsOnInitialScreen}/>
      :
      <MainScreen setIsOnInitialScreen={setIsOnInitialScreen}/>
    )
  }

  return (
    <div className="App">
      {toggleScreen(setIsOnInitialScreen)}
    </div>
  );
}

export default App;
