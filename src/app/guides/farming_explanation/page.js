

import Farming_Guide from './page_content.jsx';
import Ad_Comp from '../../util/ads_component.jsx';

export async function generateMetadata({ params, searchParams }, parent) {

  return {
    title: 'Farming Explanation - Gameplay Planner',
    description: "Farmer Against Potatoe Idle farming and plant guide + explanation. Best method for farming, what to buy, what to plant, best order, permanent improvment corner and more!"
  }
}
export const viewport = {
  width: 'device-width',
  initialScale: 1
}
export default function Page() {

  return(
    <>
    
    <Ad_Comp />
    <Farming_Guide />
    </>
  )
  
}