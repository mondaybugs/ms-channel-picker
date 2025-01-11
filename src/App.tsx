import { useState } from 'react';
import './App.css'
import Channel from './Channel.tsx'
import seedrandom from 'seedrandom'

const channelCount = 40;
const maxItems = 4;

const date = new Date();
const UTCDate = `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`;

const items = [
  "/items/Eqp_Annihilation_Weapon_Lotusroid.png",
  "/items/Eqp_Berserked.png",
  "/items/Eqp_Black_Bean_Mark.png",
  "/items/Eqp_Commanding_Force_Earring.png",
  "/items/Eqp_Daybreak_Pendant.png",
  "/items/Eqp_Dominator_Pendant.png",
  "/items/Eqp_Dreamy_Belt.png",
  "/items/Eqp_Endless_Terror.png",
  "/items/Eqp_Estella_Earrings.png",
  "/items/Eqp_Genesis_Badge.png",
  "/items/Eqp_Guardian_Angel_Ring.png",
  "/items/Eqp_Kalingroid.png",
  "/items/Eqp_Limboroid.png",
  "/items/Eqp_Magic_Eyepatch.png",
  "/items/Eqp_Nickyroid.png",
  "/items/Eqp_Papulatus_Mark.png",
  "/items/Eqp_Source_of_Suffering.png",
  "/items/Eqp_Total_Control.png",
  "/items/Eqp_Twilight_Mark.png",
  "/items/Etc_Damaged_Black_Heart.png",
  "/items/Use_Arcane_Umbra_Armor_Box.png",
  "/items/Use_Arcane_Umbra_Weapon_Box.png",
  "/items/Use_Black_Jade_Boss_Ring_Box_(Advanced).png",
  "/items/Use_Divine_Eternal_Armor_Box.png",
  "/items/Use_Eternal_Armor_of_Desire_Box.png",
  "/items/Use_Exceptional_Hammer_(Belt).png",
  "/items/Use_Exceptional_Hammer_(Earrings).png",
  "/items/Use_Exceptional_Hammer_(Eye_Acc).png",
  "/items/Use_Exceptional_Hammer_(Face_Acc).png",
  "/items/Use_Ferocious_Beast_Eternal_Armor_Box.png",
  "/items/Use_Green_Jade_Boss_Ring_Box_(Basic).png",
  "/items/Use_Grindstone_of_Life.png",
  "/items/Use_Mitra's_Rage_Selection_Box.png",
  "/items/Use_Red_Jade_Boss_Ring_Box_(Intermediate).png",
  "/items/Use_White_Jade_Boss_Ring_Box_(Exceptional).png",
  "/items/Use_Will's_Cursed_Spellbook_Selection_Box.png"
];

console.log(JSON.stringify(items));

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
