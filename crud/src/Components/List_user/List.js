import React, {useEffect} from 'react'
import './styel.scss'


const List = function(props){
 
useEffect(() => {
        console.log(props.list)
    })
    
   
    return(
        <div id="container">
           {props.list !== [] ? (
                  <div id="container">
                    {props.list.map((item) => (
                        <div key={item.id} className="card" data-id={item.id} >
                            <button className="delete" onClick={(e) => props.deleteUser(e)}>X</button> 
                            <h1>{item.name}</h1>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                    </div>   
                    
                ))}
             </div>
           ) : null}       
     </div>

    )
}
export default List