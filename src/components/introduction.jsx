import React from 'react'
import Lottie from 'react-lottie'
import images  from "./meatoffice.json"


// var style = {
//   root :  {  
//     // padding : "100px",
//     backgroundImage: 'url(images/img_bg.jpg)'
//     // padding-top: "50px",
//     // padding-right: "30px",
//     // padding-bottom: "50px",
//     // padding-left: "80px",
//   }
// }

const Introduction = () => {

  
  const defaulOptionsScroll = {
    animationData: images,
    loop: true
};


    return (
      <div>
        <Lottie  options={defaulOptionsScroll} height={400} width={400} />
      </div>
    )
  
}

export default Introduction;
