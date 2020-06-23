import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){

return(
    <header>
    <ul>
      <li>
        <Link className="link" to='/'> Home</Link>
        </li>
      <li>
        <Link className="link" to='/history'>History</Link>
        </li>
    </ul>
    <h1>RESTy APP</h1>
    </header>

);
}

export default Header;