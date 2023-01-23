import React from "react";
import './Widget.css';
import WidgetOptons from "./WidgetOptons";

function Widget() {
    return(
        <div className="widget">
            <div className="widget_header">
                <h5> 광고영역!</h5>
               
            </div>
            <div className="widget_contents">
                <WidgetOptons/>

            </div>
        
        

        </div>
        
        
    )
}

export default Widget;