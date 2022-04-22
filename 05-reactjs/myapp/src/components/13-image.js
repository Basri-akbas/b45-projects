import React from 'react'
import manzara1 from "../assets/img/image1.jpg";
import manzara2 from "../assets/img/image2.jpg";

const Image = () => {
  return (
    <div>
        <img src={manzara1}/>
        <img src={manzara2}/>
    </div>
  )
}

export default Image