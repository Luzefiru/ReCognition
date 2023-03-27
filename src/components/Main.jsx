import './Main.css';
import MemoryCard from './ui/MemoryCard';
import { useState, useEffect } from 'react';

const Main = () => {
  const [memoryCards, setMemoryCards] = useState([]);
  useEffect(() => {
    const queryTerm = 'neon';
    const imgCount = 12;
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=${imgCount}&query=${queryTerm}`,
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMemoryCards(initializeMemoryCards(data));
      });
  }, []);

  return <main>{memoryCards}</main>;
};

export default Main;

const initializeMemoryCards = (data) => {
  const memoryCards = [];
  let index = 0;
  for (let i in data) {
    memoryCards.push(<MemoryCard key={index++} imgSrc={data[i].urls.small} />);
  }
  return memoryCards;
};
