import React, { useState,useEffect } from "react";
import Data from "./data";
import Section from "./Section";


const App=()=>{

    const [currentCategory,setcurrentCategory]=useState("");
    useEffect(()=>{
        Data.map((item,index)=>(
                
            <Section key={index}
              title={item.title}
              description={item.desc}
            />
         
     ))
    },[])

    

    return(


       
        <div>

             <h1>Menu</h1>
             <div className="btn">
                <button id="filter-btn-1"onClick={()=>setcurrentCategory("")}>All</button>
                <button id="filter-btn-2" onClick={()=>setcurrentCategory("breakfast")}>BreakFast</button>
                <button  id="filter-btn-3" onClick={()=>setcurrentCategory("lunch")}>Lunch  </button>
                <button  id="filter-btn-1"onClick={()=>setcurrentCategory("shakes")}>Shakes</button>
                {

                    currentCategory===""?
                    Data.map((item,index)=>(
                
                        <Section key={index}
                          title={item.title}
                          description={item.desc}
                        />
                     
                 ))
                    
                    :
            Data.map((item,index)=>(
                
               
                item.category===currentCategory && currentCategory!="all"?
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











