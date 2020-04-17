import React from 'react'
import '../style.css'
import { Scrollbars } from 'react-custom-scrollbars';

class TextBoxSig extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:("Signature Tracks")
        }
    }
    render(){
        return (
            
            <div className = "squareSig"> 
                
                    <div className="content">
                                {this.state.value}
                            </div>

               
            </div>
        )
     }
}

export default TextBoxSig