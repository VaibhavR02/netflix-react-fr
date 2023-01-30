import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <Router>
        <Header isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
