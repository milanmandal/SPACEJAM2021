import React from 'react'
import './body.css'
import {Link} from 'react-router-dom'
function body() {

    return (
        <div>
            <Link to={'/encode'}><button className="enco eglow" >encode</button></Link> <Link to={'/decode'}><button className="deco dglow" >decode</button></Link>
        </div>
        
    )
}

export default body