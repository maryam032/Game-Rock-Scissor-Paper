import React from 'react'

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            display:<div>
                <button onClick={this.updateDisplay}>Show  Component</button>
               
                </div>
        })

    }
    reset=()=>{
        this.setState({
            display:<div>
            <button onClick={this.updateDisplay}>Show  Component</button>
           
            </div>
        })
    }
    updateDisplay=()=>{
        this.setState({
            
            display:<div>
                <button onClick={this.reset}>Show previous Component</button>
            </div>
            
            
        })
    }
    render(){
        return(<div>
            {this.state.display}

        </div>)
    }
}