import React from 'react'
import '../style.css'
import { Scrollbars } from 'react-custom-scrollbars';

class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:("love stor11")
        }
    }
    render(){
        return (

            <div className = "square">
                <Scrollbars style={{ width: 300, height: 500 }}>
                    <div className="content">
                                {this.state.value}
                            </div>
                 </Scrollbars>

                <div className="Scrollbars"></div>
            </div>
        )
     }
}

export default TextBox
