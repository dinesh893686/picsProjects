
import React from 'react'

export default function ImageShow({images}) {
  return (

<>
    { images.map((image)=>{

      return <div>
      <img  src={image.urls.small}/>

      </div>


     })}


</>


  )
}

