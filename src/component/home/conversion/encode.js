import React, { Component } from 'react'
import './convert.css'
import Logic from '../../logic/digitalToDNA'
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
            <div className="container">
               {(this.state.val)?
                <form className="in form-group" onSubmit={this.onSubmit}>
                    <p>ENCODE</p>
                    <input className="input1" placeholder ="enter data to encode"value={this.state.input} onChange={this.onChangeinput}></input>
                    <div className="form-group">
                        <input className="formgroup" type="submit" value="Encode" className="btn btn-primary" />
                    </div>
                </form> :
                <div>
                    <Logic value={data}/>
                    </div>
                }          
            </div>
        )
    }
}

export default convert
