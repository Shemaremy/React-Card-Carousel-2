import React from 'react'
import ReactDOM from 'react-dom/client'
import MultipleItems from './App'      //First Card
import CenterMode from './OtherCards'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MultipleItems />
      <CenterMode />
  </React.StrictMode>,
)
