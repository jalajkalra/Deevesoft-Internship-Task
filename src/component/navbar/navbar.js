import React, { useState } from 'react';
import classes from '../main.module.css';

const Navbar = (props)=>{
    const items = [
        {id:"1",name:"GOAL"},
        {id:"2",name:"ACTIVITY"},
        {id:"3",name:"PROFILE"},
        {id:"4",name:"SELECT COACH"}
    ]
    const [active,updateActive] = useState("1");
    return(
        <div className={classes.Container}>
            {
                items.map((item,key)=>
                <div 
                    style={{backgroundColor:`${active===item.id?"turquoise":"whitesmoke"}`}}
                    className={classes.Title}
                    key={key} 
                    onClick={()=>updateActive(item.id)}
                >{item.name}</div>    
                )
            }
        </div>
    )
}
export default Navbar;