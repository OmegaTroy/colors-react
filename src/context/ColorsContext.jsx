import { createContext, useState, useEffect } from "react"

export const ColorsContext = createContext();

const colores = {
    colore : ['red','blue','yellow','pink'],
    favoritos : ['#721fac','#fe001b','#2a2b2f','#0e1538','#48426D','#2bd2ff','#ff0461','#18d539','#1f212b', '#6610f2','#6f42c1','#e83e8c','#dc3545','#fd7e14','#ffc107','#28a745','#20c997','#17a2b8','#6c757d','#007bff','#232c33','#28a745','#17a2b8','#ffc107','#2b343b','#f8f9fa','#343a40','#363636','#2196f3'],
    hex: [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
}

export const ColorsContextProvider =(props)=>{

  const [fav, setFav] = useState([]);
  const [hex, setHex] = useState([]);
  const [color, setColor] = useState([]);
  
  useEffect(()=>{
    setFav(colores.favoritos);
    setHex(colores.hex);
    setColor(colores.colore);
  },[])

  const title = document.querySelector('.title');

  const rgbRandom =(max) => {
    return Math.floor(Math.random() * (max/2));
}
  const favRandom =()=>{
    return Math.floor(Math.random() * fav.length)
  }
  
  const colorRandom =()=>{
    return Math.floor(Math.random() * color.length)
  }

  const hexRandom =()=>{
    return Math.floor(Math.random() * hex.length)
  }

  const handledClickFav=()=>{
    const randomNumber = favRandom(fav);
    document.body.style.backgroundColor = fav[randomNumber];
    title.textContent = fav[randomNumber]
  }
  const handledClickColor=()=>{
    const randomNumber = colorRandom(color);
    document.body.style.backgroundColor = color[randomNumber];
    title.textContent = color[randomNumber]
  }
  
const handledClickHex = ()=>{
  let hax = '#';
  for(let i = 0; i < 6; i++){
      const randomNumber = hexRandom(hex)
      hax += hex[randomNumber];
  }
  document.body.style.backgroundColor = hax;
  title.textContent = hax;
};

const handledReset =()=>{
  document.body.style.backgroundColor = '#1f212b';
  title.textContent = '#1f212b';
}

const handledClickRgb = ()=>{
  const red = rgbRandom(256);
  const green = rgbRandom(256);
  const blue = rgbRandom(256);
  let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.backgroundColor = rgb;
  title.textContent = rgb;
};


  return (
    <ColorsContext.Provider value={{
      handledClickRgb,
      handledReset,
      handledClickHex,
      handledClickFav,
      handledClickColor
    }}>
      {props.children}
    </ColorsContext.Provider>
  )
}
