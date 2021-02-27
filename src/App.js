import React from 'react'
import './App.css'
import Particle from './component/home/background/particles'
import Body from './component/home/body/body'
import Info from './component/home/info/info'
export default function App() {
  return (
      <div>
        <div className="particles-js">
        <Particle/>
        </div> 
        <div><Info/></div>
        <div className="text">
          DNA 
          <br></br>
          Deco - Enco
        </div>
        <div className="text">
        <Body/>
        </div>
        
        
               
      </div>
        
        
  )
}
