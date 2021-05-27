import React from 'react'
import "./sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className = "sidebar">
            <Button startIcon = {<AddIcon/>} className="sidbar_compose" >
            Compose
            </Button>
            <SidebarOption Icon = {InboxIcon}  title = "inbox" number = {50} selected = {true}/>
            <SidebarOption Icon = {StarIcon}  title = "starred"  />
            <SidebarOption Icon = {QueryBuilderIcon}  title = "snoozed"  />
            <SidebarOption Icon = {LabelImportantIcon}  title = "important"  />
            <SidebarOption Icon = {SendIcon}  title = "sent"  />
            <SidebarOption Icon = {DeleteIcon}  title = "Trash"  />
            <SidebarOption Icon = {ExpandMoreIcon}  title = "more"  />
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                         < PersonIcon/>  
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;
