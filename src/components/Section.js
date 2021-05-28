import React from 'react'
import "./section.css";

function Section({title,selected,Icon,color}) {
    return (
        <div className={`section ${selected && "section_selected"}`}
          style = {{
              borderBottom :`3px solid ${color}`,
              color: `${selected && color}`,

          }}
        >
       <Icon/>
       <h4>{title}</h4>
       
            
        </div>
    )
}

export default Section
