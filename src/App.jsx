
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pictures from './Pages/Pictures/Pictures';




export default function App() {
  return (
    <>
      <Router>

        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/fotos" exact element={<Pictures />} />
          </Routes>
        </div>

      </Router>
    </>

  );
}
