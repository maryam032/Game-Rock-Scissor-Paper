import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            player1:<span style={{color:'white',fontSize:20}}>N/A</span>,
            player2:<span style={{color:'white',fontSize:20}}>N/A</span>,
            result:<span style={{color:'#D6EAF8',fontSize:40}}>Maryam Won :)
            </span>,
            showResult: <h2 style={{color:'#D6EAF8',fontSize:40}}>.</h2>
        })
    }

    handleSelection=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   Winner=(e)=>
    {
    if(this.state.player1==='Rock' && this.state.player2==='Scissor')
    {
        this.setState({result:'Talha Won :)'},()=>{this.displayResult()})
    }
    if(this.state.player1==='Rock' && this.state.player2==='Rock')
    {
        this.setState({result:'Tie :('},()=>{this.displayResult()})
    }
    if(this.state.player1==='Scissor' && this.state.player2==='Scissor')
    {
        this.setState({result:'Tie :('},()=>{this.displayResult()})
    }
    if(this.state.player1==='Paper' && this.state.player2==='Paper')
    {
        this.setState({result:'Tie :('},()=>{this.displayResult()})
    }
     if(this.state.player1==='Scissor' && this.state.player2==='Rock')
    {
        this.setState({result:'Maryam Won :)'},()=>{this.displayResult()})
    }
    if(this.state.player1==='Scissor' && this.state.player2==='Paper')
    {
        this.setState({result:'Talha Won :)'},()=>{this.displayResult()})
    }
    if(this.state.player1==='Paper' && this.state.player2==='Scissor')
    {
        this.setState({result:'Maryam Won :)'},()=>{this.displayResult()})
    }
    if(this.state.player1==='Paper' && this.state.player2==='Rock')
    {
        this.setState({result:'Talha Won :)'},()=>{this.displayResult()})
    }
    if(this.state.player1==='Rock' && this.state.player2==='Paper')
    {
        this.setState({result:'Maryam Won :)'},()=>{this.displayResult()})
    }

    }
    displayResult=()=>{
        this.setState({
            showResult:<h2 style={{color:'#283747 ',fontSize:40}}>{this.state.result}</h2>
        })
    }
    render()      
    {
        return(<div style={{border:'1px solid #D6EAF8',width:'100%',height:600,backgroundColor:'#D6EAF8'}}>
            <center><button className="btn" style={{fontSize:20,color:'white',fontWeight:'bold',width:'130px',height:50,border:'none',outline:'none',marginTop:40,borderRadius:50}}name='Winner' value='Winner' onClick={this.Winner}>Winner</button>
               {this.state.showResult}
            <div style={{marginLeft:260,padding:15,border:'1px solid black',width:'320px',height:'300px',float:'left',alignItems:'center',backgroundColor:'#141A46'}}>
                <span style={{fontWeight:'bold',fontSize:20,color:'white'}}>Player1: Talha</span>
                <input type="button" style={{fontSize:20,marginTop:30,height:60,borderRadius:50,border:'none',outline:'none',width:'100%',padding:12,backgroundColor:'#EC8B5E',color:'white',fontWeight:'bold'}} name="player1" value="Rock" onClick={e=>this.handleSelection(e)} /><br/>
                <input type="button" style={{fontSize:20,height:60,borderRadius:50,marginTop:5,border:'none',outline:'none',width:'100%',padding:12,backgroundColor:'#EC8B5E',color:'white',fontWeight:'bold'}} name="player1" value="Scissor" onClick={e=>this.handleSelection(e)} /><br/>
                <input type="button" style={{fontSize:20,height:60,borderRadius:50,marginTop:5,marginBottom:10,border:'none',outline:'none',width:'100%',padding:12,backgroundColor:'#EC8B5E',color:'white',fontWeight:'bold'}} name="player1" value="Paper" onClick={e=>this.handleSelection(e)} /><br/>
               
                <h3 style={{color:'white',fontSize:20,marginBottom:10}}>Selected : {this.state.player1}</h3>
            </div>
           
            <div style={{marginRight:300,padding:15,border:'1px solid black' ,width:'320px',height:'300px',float:'right',alignItems:'center',backgroundColor:'#141A46'}}>
            <span style={{fontWeight:'bold',fontSize:20,color:'white'}}>Player2: Maryam</span>
            <input type="button" style={{fontSize:20,marginTop:30,height:60,borderRadius:50,border:'none',outline:'none',width:'100%',padding:12,backgroundColor:'#EC8B5E',color:'white',fontWeight:'bold'}} name="player2" value="Rock" onClick={e=>this.handleSelection(e)} /><br/>
                <input type="button" style={{fontSize:20,height:60,borderRadius:50,marginTop:5,border:'none',outline:'none',width:'100%',padding:12,backgroundColor:'#EC8B5E',color:'white',fontWeight:'bold'}} name="player2" value="Scissor" onClick={e=>this.handleSelection(e)} /><br/>
                <input type="button" style={{fontSize:20,marginBottom:10,height:60,borderRadius:50,marginTop:5,border:'none',outline:'none',width:'100%',padding:12,backgroundColor:'#EC8B5E',color:'white',fontWeight:'bold'}} name="player2" value="Paper" onClick={e=>this.handleSelection(e)} /><br/>
                <h3 style={{color:'white',fontSize:20,marginBottom:10}}>Selected : {this.state.player2}</h3>
            </div>
            </center>
            <button className="bt" style={{width:'150px',height:50,marginLeft:1120,borderRadius:40,border:'none',outline:'none',marginBottom:10,fontWeight:'bold',fontSize:20,marginTop:0}} name='Play Again' value='Play Again' onClick={e=>window.location.reload()}>Play Again</button>
        </div>)
        
    }
}