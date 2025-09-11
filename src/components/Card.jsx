import cardData from "../api/cardData.json"
import { ArrayList } from "./ArrayList";
const Card=()=>
{
  return (
    <ul className="grid grid-three--cols">
    {cardData.map((cur)=>(

      <ArrayList key={cur.id} cur={cur}/>)
      
    )}
    </ul>
  )
}
// console.log(cardData);
export default Card;
