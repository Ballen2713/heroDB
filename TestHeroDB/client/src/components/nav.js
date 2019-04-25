import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

class Nav extends Component{
 
  render(){
    let navLinks = this.props.navBar.map((item, index) => {
      return(
        <li key={item.label + '_' + index} className='menuItem'>
          <NavLink to={item.link} activeStyle={{color: 'white'}}>{item.label}</NavLink>
        </li>
      )
    });
    return(
      <nav className='navBar'>
        <div>
          <ul>
            {navLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;