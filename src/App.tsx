import { useState } from 'react';
import './App.css'
import Channel from './Channel.tsx'
import seedrandom from 'seedrandom'

const channelCount = 40;
const maxItems = 4;

const date = new Date();
const UTCDate = `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`;

const modules = import.meta.glob('./assets/items/*.png')
const items = Object.keys(modules);

function App() {
  const [count, setCount] = useState(0)
  
  const rng = seedrandom(UTCDate);
  const itemSlot: string[][] = Array.from(Array(channelCount), () => []);

  for (const item of items) {
    for (let i = 0; i < 1000; i++) {
      const random = count > 0 ?  (Math.floor(Math.random() * channelCount)) : (Math.floor(rng() * channelCount))
      
      if (itemSlot[random].length < maxItems) {
        itemSlot[random].push(item)
        break
      }
    }
  }

  const channels: React.ReactElement[] = [];

  for (let i = 0; i < channelCount; i++) {
    channels.push(<Channel key={i} number={i + 1} items={itemSlot[i]} />);
  }

  return (
    <>
      <h1>Channel X-ray</h1>
      <div className='channelList'>
        {channels}
      </div>

      <button onClick={() => setCount((count) => count + 1)}>Reroll</button>

      <div className='footer'>
        <p className='finePrint'>*First drops reset daily. Rerolling increases the chance of nothing dropping.</p>
        <p className='finePrint'>*Can not change channel once selected or else nothing will drop.</p>
        <p className='finePrint'>*If the item did not drop you did not believe hard enough. Try again next run.</p>
      </div>
    </>
  )
}

export default App
