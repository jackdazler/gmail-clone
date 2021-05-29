import React from 'react'
import "./emailList.css";
import { IconButton ,Checkbox} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
function EmailList() {
    return (
        <div className = "emailList">
          <div className="emailList_settings">
              <div className="emailList_setting_left">
                 
               <Checkbox/>
                  
                  <IconButton>
                 <ArrowDropDownIcon/>
                  </IconButton>
                  <IconButton>
                      <RedoIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
                

              </div>
              <div className="emailList_setting_right">
                  <IconButton>
                      <ChevronLeftIcon/>
                  </IconButton>
                  <IconButton>
                      <ChevronRightIcon/>
                  </IconButton>
                  <IconButton>
                  <KeyboardIcon/>
                  </IconButton>
                  <IconButton>
                <SettingsIcon/>
                  </IconButton>

              </div>
              
              </div> 
            <div className="emailList_sections">
                <Section  title = "Primary" color ="red" selected Icon = {InboxIcon}/>
                <Section  title = "Social" color ="#1a73e8"  Icon = {PeopleIcon}/>
                <Section  title = "Promotions" color ="green"  Icon = {LocalOfferIcon}/>
                
                </div>  
                <div className="emailList_list">
                    <EmailRow  
                      title = "Amazon" subject = 'Grab this offer'
                      description = "Limited sale huge discount on productsimited sale huge discount on productsimited sale huge discount on products"
                      time = '12:00pm'
                    />
                    </div> 
            
        </div>
    )
}

export default EmailList
