
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pictures from './Pages/Pictures/Pictures';
import Reservation from './Pages/Reservation/reservation';




export default function App() {
  return (
    <>
      <Router>

        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/fotos" exact element={<Pictures />} />
            <Route path="/reservas" exact element={<Reservation />} />
          </Routes>
        </div>

      </Router>
    </>

  );
}
