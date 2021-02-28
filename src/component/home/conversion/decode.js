import React, { Component } from 'react'
import './convert.css'
import Logic from '../../logic/digitalToDNA'
import {Link} from 'react-router-dom'
let data='';
export class convert extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            input:'',
            val:true,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeinput = this.onChangeinput.bind(this);
      }
      onChangeinput(e) {
        this.setState({
          input: e.target.value
        })
      }
    onSubmit(e){
        e.preventDefault();
        this.setState({
            val:false,
        })    
        console.log(this.state.val)
        data=this.state.input;
    }
    render() {
        return (
            <div className="in">
              The DNA strand after printing could be used to regain the information which was encoded in the strands and injected as a serum.

              <Link to={'/'}><button className="btn btn-success" >HOME</button></Link>       
            </div>
        )
    }
}

export default convert
