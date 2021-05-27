import { IconButton } from '@material-ui/core'
import React from 'react'
import "./sidebaroption.css";

function SidebarOption({title,Icon,number,selected}) {
    return (
        <div className = {`sidebarOption ${selected && "sidebarOption_active"}`}>
         
              <Icon/>

           <h3>{title}</h3>
             <p>{number}</p>
           
           
        </div>
    )
}

export default SidebarOption;
