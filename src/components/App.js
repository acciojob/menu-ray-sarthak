import React, { useState,useEffect } from "react";
import Data from "./data";
import Section from "./Section";


const App=()=>{

    const [currentCategory,setcurrentCategory]=useState("");
 

    

    return(


       
        <div>

             <h1>Menu</h1>
             <div className="btn">
                <button onClick={()=>setcurrentCategory("all")}>All</button>
                <button onClick={()=>setcurrentCategory("breakfast")}>BreakFast</button>
                <button onClick={()=>setcurrentCategory("lunch")}>Lunch  </button>
                <button onClick={()=>setcurrentCategory("shakes")}>Shakes</button>
                {
            Data.map((item,index)=>(
                currentCategory==="all"?Data.map((item,index)=><Section key={index}
                title={item.title}
                description={item.desc}
              />):
                item.category===currentCategory?
                   <Section key={index}
                     title={item.title}
                     description={item.desc}
                   />:""
                
            ))
           }
             </div>
          
            
           </div>
    )
}
export default App;











