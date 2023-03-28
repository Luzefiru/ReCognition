import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score} />
      <Main setScore={setScore} />
      <Footer />
    </>
  );
}

export default App;
