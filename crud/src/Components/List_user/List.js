import React, {useEffect} from 'react'
import './styel.scss'


const List = function(props){
 
useEffect(() => {
        console.log(props.list)
    })
    
    return(
        <div id="container">
           {props.list !== [] ? (
                  <ul>
                    {props.list.map((item) => (
                        <div key={item.id} className="card" >
                            <h1>
                                {item.name} 
                            </h1>
                            <h3>
                            {item.title} 
                            </h3>
                            <p>
                            {item.body} 
                            </p>
                    </div>   
                    
                ))}
             </ul>
           ) : null}       
     </div>

    )
}
export default List