import { CardCarculator } from "./CardCarculator"
import { CardResult } from "./CardResult"

export const Card = () => {
  return (
    <div className='card'>
        <CardCarculator />
        <CardResult />
    </div>
  )
}
