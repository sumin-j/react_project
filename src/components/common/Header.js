import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const active = {background:'#cd8574', borderRadius:'16px', color:'#fff'}
  return (
    <header className={props.type}>
        <div className="inner">
            <h1>
                <NavLink exact to='/'>Logo</NavLink>
            </h1>

            <ul id="gnb">
                <li>
                    <NavLink activeStyle={active} to='/department'>Department</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={active} to='/community'>Community</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={active} to='/gallery'>Gallery</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={active} to='/youtube'>Youtube</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={active} to='/location'>Location</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={active} to='/join'>Join</NavLink>
                </li>
            </ul>

            <a href="#" className='myPage'>
                <FontAwesomeIcon icon={faCircleUser} />    
            </a>

        </div>
    </header>
  )
}

export default Header