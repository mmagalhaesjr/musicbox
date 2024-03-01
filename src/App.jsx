
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pictures from './Pages/Pictures/Pictures';
import Reservation from './Pages/Reservation/reservation';
import Menu from './Pages/Menu/Menu';
import HomeContextProvider from './contexts/HomeContext';

import SalaId from './Pages/CadaSala/SalaId';




export default function App() {
  return (
    <>
      <Router>
      <HomeContextProvider>

        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/fotos" exact element={<Pictures />} />
            <Route path="/cardapio" exact element={<Menu />} />

            <Route path="/sala" exact element={<Reservation />} />

            <Route path="/sala/:salaId" exact element={<SalaId />} />
          </Routes>
        </div>
        
        </HomeContextProvider>
      </Router>
    </>

  );
}
