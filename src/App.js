import React from 'react'
import './App.css'
import Particle from './component/home/background/particles'
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap helful for CSS
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Cover from './component/home/cover/cover'
import Encode from './component/home/conversion/encode'
import Decode from './component/home/conversion/decode'
export default function App() {
  return (
    <Router>
        <div className="particles-js">
          <Particle/>
        </div> 
      <Route path="/" exact component={Cover} />
      <Route path="/encode" exact component={Encode}/>
      <Route path="/decode" exact component={Decode}/>
</Router>
  )
}