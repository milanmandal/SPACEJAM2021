import React from 'react'
import './body.css'
import Convert from '../conversion/convert'
function body() {


    const encode=()=>
    {
        return(<Convert/>)
    }
    const decode=()=>
    {

    }
    return (
        <div className='pos'>
            <button className="enco eglow" onClick={encode}>encode</button> <button className="deco dglow" onClick={decode}>decode</button>
            <br></br>
            <textarea className="input"> </textarea>  <textarea className="input"> </textarea>
        </div>
        
    )
}

export default body
