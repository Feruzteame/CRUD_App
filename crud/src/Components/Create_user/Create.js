
import React, { useState,useRef, useEffect} from 'react';
import {v4 as uuid} from "uuid";
import "./style.scss"
import List from '../List_user/List';

function Create(key, initialValue) {

  // set value
  const name = useRef();
  const title = useRef();
  const body = useRef();

  // set empty Array
  const [user, setUser] = useState([])

  
 // add function user
  const AddUser = () => {

    // if the value is not empty
      if (user !== "") { 

        // saved current value(new value)
        const nameValue = name.current.value;
        const titleValue = title.current.value;
        const bodyValue = body.current.value;

        // put the data in the form of object
        const listObject = {
          id: name.current.getAttribute('data-key'),
          name: nameValue,
          title: titleValue,
          body: bodyValue
        }

        // add the new user with we already have user and crete new array for all user
        const newUser =  [...user,listObject];

        // then set the new array 
        setUser(newUser)
        console.log(newUser)
        
        // make the space(input form) empty after submit
        name.current.value = "";
        title.current.value = "";
        body.current.value = "";
        return newUser

        // if the input is empty send some message
        }else{
        alert("Please add some text before add")
      }
    }

   // delete user
   const deleteUser  = (e) => {
        e.preventDefault();
       let div = e.target.closest('div')
       let id = div.getAttribute('data-id')
       setUser(user.filter((list) => list.id !== id));
  };


// local storage
useEffect(() => {
   window.localStorage.setItem('Users', JSON.stringify(user))
},[user])

useEffect(() => {
    const data = window.localStorage.getItem('Users')
   if(data){
     setUser(JSON.parse(data))
     } 
},[])

 



   return (
       <>
      <div className="form">
          <fieldset>
                <legend>Add user</legend>
                <label htmlFor="name">Name</label> <br/>
               <input
                    type="text"
                    name="name"
                    data-key={uuid()}
                    id="text"
                    ref={name}
                    placeholder="Put your name..."
                />
                <br/> 
                <label htmlFor="name">Job Title</label> <br/>
               <input
                    type="text"
                    name="title"
                    data-key={uuid()}
                    id="text"
                    ref={title}
                    placeholder="Put your title..."
                />
                <br/> 
                <label htmlFor="name">Detail</label> <br/>
               <textarea
                    type="text"
                    name="detail"
                    data-key={uuid()}
                    id="text"
                    ref={body}
                    placeholder="Put your message..."
                />
                <br/> 
                <button type="submit" onClick={AddUser}>Add</button>
            </fieldset>
            
      </div>

      {/* pass some data to other file */}
      <List list={user} deleteUser={deleteUser} />
      </>
       );
       
  }

export default Create;
