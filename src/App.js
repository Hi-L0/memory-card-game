import logo from './logo.svg';
import './App.css';
// import Frame from './components/gameframe/Frame';
import { ModeContext } from './contexts/ModeContext';
import ModeProvider from './contexts/ModeProvider';
import Game from './components/game/Game';
import ScoreBoardProvider from './contexts/ScoreBoardProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ModeProvider>
        <ScoreBoardProvider>
          <Game/>
        </ScoreBoardProvider>
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
