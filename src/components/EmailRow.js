import React from 'react'
import {Checkbox, IconButton} from  '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelIcon from '@material-ui/icons/Label';
import "./emailRow.css";
import { useHistory } from 'react-router';
function EmailRow({id, title, subject, description,time}) {
    const history  = useHistory();
    return (
        <div className="emailRow" onClick={()=>history.push('/mail')}>
            <div className="emailRow_options">
             <Checkbox/>
             <IconButton>
                 <StarOutlineIcon/>
             </IconButton>
             <IconButton>
                 <LabelIcon/>
             </IconButton>

            </div>
            <h3 className="emailRow_title">{title}</h3>
            <div className="emailRow_message">
                <h4>{subject}
                <span className="emailRow_description">- {description}</span>
                </h4>

            </div>
            <div className="emailRow_time">
               {time} 
            </div>
            
        </div>
    )
}

export default EmailRow;
