import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            <h3><Link to='/'>Home</Link></h3>
            <h3><Link to="/projects">Projects</Link></h3>
        </div>
    )
}

export default Header;