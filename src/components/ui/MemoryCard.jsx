import './MemoryCard.css';

const MemoryCard = (props) => {
  const imgSrc = props.imgSrc;
  return (
    <div className="MemoryCard" onClick={props.handleMemoryCardClick}>
      <img className="MemoryCard__album-art" alt="Album Art" src={imgSrc}></img>
    </div>
  );
};

export default MemoryCard;
