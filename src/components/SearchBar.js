import React from 'react'
import { useState } from 'react';
export default function SearchBar(props) {
   const [term,setTerm]=useState('');
     
  const onHandleSubmit=(event)=>{
       event.preventDefault();

         props.onChange(term);

  }
  const onInputChange=(event)=>{
  console.log(event.target.value);
//   console.log("on input called")
// term=tree
     setTerm(event.target.value)
  }

  console.log(term);



  return (
    <div>
     <h1>Search Pics</h1>
    <form onSubmit={onHandleSubmit}>
      <label>Enter Search Images</label>
      <input type="text" onChange={onInputChange}>
      </input>
    </form>
      <div>{term}</div>
    </div>
  )
}
