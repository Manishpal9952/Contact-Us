import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
     
        
        <button>
          {props.icon}
          {props.text}
        </button>
    
    
    </div>
  );
}

export default Button;
