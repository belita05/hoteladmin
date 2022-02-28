import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import'./NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faBars} from '@fortawesome/free-solid-svg-icons'
import{faTimes} from '@fortawesome/free-solid-svg-icons'
import { ButtonOut } from '../Button';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

class NavBar extends Component {
    
    state = { clicked:false }
    handleClick = () =>{ this.setState({ clicked:!this.state.clicked})

    }
    
    render() {
    
        return (
            <nav className="NavbarItems">
                <h1 className='navbar-logo'>Hotel Finder<i className="fa fa-react" ></i></h1>
                <div className='menu-icon' onClick={this.handleClick} >
                   <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                 </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) =>{
                 return (
                 <Link to ={item.url}><a className={item.cName}>
                        <Link to={item.url}></Link>
                     {item.title}
                 </a>
                 </Link>
                 )
                    })}
                </ul>
                <Link  to="/" ><button className="btn" >Log Out</button> </Link>
            </nav>
        )
    }
}
export default NavBar