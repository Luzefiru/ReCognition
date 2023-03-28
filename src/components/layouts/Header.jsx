import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';

const Header = (props) => {
  const [personalBest, setPersonalBest] = useState(0);

  useEffect(() => {
    setPersonalBest(props.score > personalBest ? props.score : personalBest);
  }, [props, personalBest]);

  return (
    <header>
      <span className="header__title">
        Re<span className="header__title__accent">Cognition</span>
      </span>
      <div className="header__score">
        <span className="header__score__current">Score: {props.score}</span>
        <span className="header__score__best">
          Personal Best: {personalBest}
        </span>
      </div>
    </header>
  );
};

export default Header;
