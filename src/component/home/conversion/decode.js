import React, { Component } from 'react'
import './convert.css'
import Logic from '../../logic/digitalToDNA'
import {Link} from 'react-router-dom'
let data='';
export class convert extends Component {
   
    render() {
        return (
            <div className="in2">
              The DNA strand after printing could be used to regain the information which was encoded in the strands and injected as a serum.
                <br>
                </br>
              <Link to={'/'}><button className="btn btn-success" >HOME</button></Link>       
            </div>
        )
    }
}

export default convert
