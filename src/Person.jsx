import React from "react";
function Person(props){
    return(


       <div className="col-3 mt-3 border shadow   "  >
        <img  src={props.img} alt=""/>
        <div className="boxes">
            <div>{props.name}</div>
            <div>rating{props.rating}⭐</div>
        </div>
    
         </div>
    )
}
export default Person;