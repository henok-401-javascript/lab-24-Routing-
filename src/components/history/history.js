import React from 'react';



// props.history

class History extends React.Component{
constructor(props){
  super(props)
  this.state = {
    redirect:false,
  };
}

  renderHandler(request){
   this.props.renderHandler(request);
  }

render(){

  let storedHistory = [];
console.log(storedHistory);

// i need to save the url method header and body. 

for(let i = 0; i < this.props.history.length;i ++){
if(this.props.size === 'light'){
storedHistory.push(
<div key={i}>
  <span className="historyURL">{this.props.history[i].url}</span>
  <span className="historyMethod">{this.props.history[i].method}</span>
  <button onClick={(e) => {
    this.renderHandler(this.props.history[i])
  }}>RERUN</button>
</div>

)

}
else{

  storedHistory.push(
    <div key={i}>
      <span className="historyURL">{this.props.history[i].url}</span>
      <span className="historyMethod">{this.props.history[i].method}</span>
      <button onClick={(e) => {
        this.renderHandler(this.props.history[i])
      }}>RERUN
      </button>
<div>
<span>{this.props.history[i].header}</span>
<span>{this.props.history[i].body}</span>

</div>
    </div>
    
    );

}


}


return (
  <div>
{storedHistory}
  </div>
  ); 
  

}

} 
export default History;