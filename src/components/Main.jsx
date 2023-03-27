import './Main.css';
import MemoryCard from './ui/MemoryCard';

const Main = () => {
  const imgSrc =
    'https://i.scdn.co/image/ab67616d0000b273385baa130749f6a64aef2e39';
  return (
    <main>
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
      <MemoryCard imgSrc={imgSrc} />
    </main>
  );
};

export default Main;
