import React from "react";
function Person(props){
    return(


       <div className="col-3  mt-3 border shadow "  >
       <div className="row"> <img  src={props.img} alt=""    className=""/></div>
     
            <div>{props.name}</div>
            <div>rating{props.rating}⭐</div>
        
    
         </div>
    )
}
export default Person;