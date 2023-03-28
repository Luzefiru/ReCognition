import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleMemoryCardClick = (src) => {
    console.log('hi');
    setSelectedCards([...selectedCards, src]);
    console.log(selectedCards);
  };

  return (
    <>
      <Header />
      <Main handleMemoryCardClick={handleMemoryCardClick} />
      <Footer />
    </>
  );
}

export default App;
