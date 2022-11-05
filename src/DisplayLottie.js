import React from 'react'
import Lottie from 'react-lottie';

function DisplayLottie({animationData}) {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <Lottie options={defaultOptions} 
    height={480}
    width={480}
    >

    </Lottie>
  )
}

export default DisplayLottie