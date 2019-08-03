import React from 'react'
import './Button.css'
import Gam from '../src/newFile'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state=({
           
          
            display:<div style={{border:'1px solid #D6EAF8',width:'100%',height:600,backgroundColor:'#D6EAF8'}}>
            <div style={{borderRadius:70,border:'1px solid #F1C40F ',float:'left',width:800,height:430,backgroundColor:'#EC7063',marginTop:70,marginLeft:50}}>
                <img style={{marginTop:15,
                outline:'none',
                height:400,
                width:"790px",
                marginLeft:4,
                borderRadius:70,
                marginRight:2}}src={process.env.PUBLIC_URL +"/game.png"}
                alt="Mypic"  />
            </div>
            <div style={{width:260,height:90,float:'right',marginTop:190,marginRight:130}}>
                <input  style={{marginLeft:0,marginTop:0,borderRadius:50,border:'none',outline:'none',
                width:260,height:90,fontSize:30,color:'white'}} 
                className="Button" type="button" value="Start Game"    />
                <img style={{marginTop:10,
                    outline:'none',
                    height:80,
                    width:"100px" ,
                    marginLeft:90,
                    borderRadius:100,
                }}src={process.env.PUBLIC_URL +"/arrow.png"}
                    alt="Mypic" onClick={this.imgHandler}/>
           
            </div> 
        </div>
       
        })
    }  
    imgHandler=()=>
    {
      this.setState({
          display:<Gam/>
      })
    }
    
   
    
    render()
    {
        return(
            <div>
            {this.state.display}
            

        </div>
        )
    }
}
export default Game;