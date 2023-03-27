import './MemoryCard.css';

const MemoryCard = () => {
  const imgSrc =
    'https://i.scdn.co/image/ab67616d0000b273385baa130749f6a64aef2e39';
  return (
    <div className="MemoryCard">
      <img className="MemoryCard__album-art" alt="Album Art" src={imgSrc}></img>
    </div>
  );
};

export default MemoryCard;
