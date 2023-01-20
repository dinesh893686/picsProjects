import React, { useState } from 'react'
import SearchBar from './SearchBar'
import  searchImages from '../api'
 
import ImageShow from './ImageShow';
export default function App() {

    // searchImages('car');
    const [images,setImages]=useState([]);
    // images=[];
    const onHandleChange=async(term)=>{
    //  console.log(term);
       const results =await searchImages(term);
      //  console.log(results);
      setImages(results);
       
    }

  return (
    <div>
    <SearchBar onChange={onHandleChange}/>
<ImageShow  images={images}/>

  
   
    </div>
  )
}
