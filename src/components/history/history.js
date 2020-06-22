import React from 'react';



// props.history

function History(props){

  let storedHistory = [];
console.log(storedHistory);
function renderHandler(e){
  console.log('rerender', e);
}


// i need to save the url method header and body. 

for(let i = 0; i < props.history.length;i ++){
if(props.size === 'light'){
storedHistory.push(
<div>
  <span className="historyURL">{props.history[i].url}</span>
  <span className="historyMethod">{props.history[i].method}</span>
  <button onClick={(e) => {
    renderHandler(props.history[i])
  }}>RERUN</button>
</div>

)

}
else{

  storedHistory.push(
    <div>
      <span className="historyURL">{props.history[i].url}</span>
      <span className="historyMethod">{props.history[i].method}</span>
      <button onClick={(e) => {
        renderHandler(props.history[i])
      }}>RERUN
      </button>
<div>
<span>{props.history[i].header}</span>
<span>{props.history[i].body}</span>

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
export default History;