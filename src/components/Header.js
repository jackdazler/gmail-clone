import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Icon, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import gmail_logo from "../images/logo.jpg";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./header.css"

function Header() {
    return (
        <div>
            <header className = "header_main">
                <div className="header_left">
                   <IconButton>
                       <MenuIcon/>
                   </IconButton>
                   <img  className="gmail_logo" src= {gmail_logo} alt="gmail-logo" />
                </div>
                <div className="header_mid">
                    <IconButton>
                    <SearchIcon/>
                    </IconButton>
                <input className="header_input" type="text" placeholder="search mail"/>
                 <IconButton>
                     <ArrowDropDownIcon/>
                 </IconButton>
                </div>
                <div className="header_right">
                    <IconButton>
                        <HelpOutlineIcon/>
                    </IconButton>
                    <IconButton>
                       <SettingsIcon/> 
                    </IconButton>
                    <IconButton>
                    <AppsIcon/>
                    </IconButton>
                    <IconButton>
                    <AccountCircleIcon/>  
                    </IconButton>


                </div>
            </header>
            
        </div>
    )
}

export default Header;

