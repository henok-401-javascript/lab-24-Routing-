import React from 'react';

function If (props){
if(props.condition)
  return (
  <div>
{props.children}

  </div>
  );
  else 
  return null;



}

export default If;