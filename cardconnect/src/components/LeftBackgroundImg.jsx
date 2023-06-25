import React from 'react'
import bgLeft from '../assets/images/bg-main-desktop.png'
function LeftBackgroundImg() {
  return (
    <div style={{display: 'flex',alignItems: 'center'}}>
        <img src={bgLeft} alt=""  style={{height: '100vh', width: '30rem'}}/>
    </div>
  )
}

export default LeftBackgroundImg