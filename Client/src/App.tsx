import { Route, Routes } from "react-router-dom";

import Home from './Routes/Home/Home';
import ErrorPage from './Routes/Error/Error';
import Deck from './Routes/Deck/Deck';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Deck" element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App;
