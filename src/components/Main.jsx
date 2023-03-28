import './Main.css';
import MemoryCard from './ui/MemoryCard';
import { useState, useEffect } from 'react';

const Main = () => {
  const [memoryCards, setMemoryCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const handleMemoryCardClick = (src) => {
      const imageID = src.split('photo-')[1].split('-')[0];

      if (selectedCards.indexOf(imageID) !== -1) {
        // console.log(
        //   'You picked a duplicate, score & selectedCards array resets!'
        // );
        props.setScore(0);
        setSelectedCards([]);
      } else {
        // console.log(
        //   'Not a duplicate, score increments & add image ID to selectedCards!'
        // );
        props.setScore((prevScore) => prevScore + 1);
        setSelectedCards([...selectedCards, imageID]);
      }
    };

    const queryTerm = 'neon';
    const imgCount = 12;
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=${imgCount}&query=${queryTerm}&topics=lights`,
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMemoryCards(initializeMemoryCards(data, handleMemoryCardClick));
      });
  }, [selectedCards, props]);

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
        imgSrc={data[i].urls.small}
      />
    );
  }
  return memoryCards;
};
