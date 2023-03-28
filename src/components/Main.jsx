import './Main.css';
import MemoryCard from './ui/MemoryCard';
import { useState, useEffect } from 'react';

const Main = (props) => {
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
        setMemoryCards(
          initializeMemoryCards(data, props.handleMemoryCardClick)
        );
      });
  }, [props.handleMemoryCardClick]);

  return <main>{memoryCards}</main>;
};

export default Main;

const initializeMemoryCards = (data, handleClickFn) => {
  const memoryCards = [];
  let index = 0;
  for (let i in data) {
    memoryCards.push(
      <MemoryCard
        key={index++}
        handleMemoryCardClick={() => {
          handleClickFn(data[i].urls.small);
        }}
        // imgSrc={data[i].urls.small}
        imgSrc={
          'https://lastfm.freetls.fastly.net/i/u/500x500/df74377533dd4cdad5da59bc675d0156.jpg'
        }
      />
    );
  }
  return memoryCards;
};
