
import { Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/Layout/NavBar';
import TicTacToe from './components/TicTacToe/TicTacToe'
import Snake from './components/Snake/Snake'
import MineSweeper from './components/MineSweeper/MineSweeper';


function App() {
  return (
    <div>
      <NavBar/>
      
      <Routes>
          <Route path='/tic-tac-toe' element={<TicTacToe/>} />
          <Route path='/snake' element={ <Snake/> } />
          <Route path='/mine-sweeper' element={<MineSweeper/>} />
      </Routes>
    </div>
    
  );
}

export default App;
