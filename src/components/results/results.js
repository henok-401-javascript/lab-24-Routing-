import React from 'react';

 function Result(props){
return (
  <div className={props.className} style={props.style}>
    
    <div className='header'>

      <pre className="headerClass">{JSON.stringify(props.header, null, props.tabwidth)}</pre>


    <div className='body'>
      <pre className="bodyClass">{JSON.stringify(props.body, null, props.tabwidth)}</pre>
  </div>
  </div>
</div>
);
}

export default Result;