import { ColorsContext } from '../context/ColorsContext'
import {useContext} from 'react'
import '../btn.css'

const ColorsBg =()=>{
  const {handledClickFav, handledClickRgb,handledReset,handledClickHex,handledClickColor}= useContext(ColorsContext)
  return(
    <div className='container__btn'>
      <button className='btn' onClick={handledClickFav}>Favorito</button>
      <button className='btn' onClick={handledClickColor}>Color</button>
      <button className='btn' onClick={handledReset}>Reset</button>
      <button className='btn' onClick={handledClickHex}>hex</button>
      <button className='btn' onClick={handledClickRgb}>Rgb</button>
    </div>
  )
}    


export default ColorsBg