import React from 'react'
import ReactDOM from 'react-dom/client'
import MultipleItems from './App'      //First Card
import CenterMode from './OtherCards'  //Second Card
import Autoplay from './Autoplay'     // Third card library
import UniAutoplay from './uniautoplay'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MultipleItems />
      <CenterMode />
      <Autoplay />
      <UniAutoplay />
  </React.StrictMode>,
)

