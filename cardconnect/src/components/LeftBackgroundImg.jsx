import React from 'react'
import bgLeft from '../assets/images/bg-main-desktop.png'
function LeftBackgroundImg() {
  return (
    <div style={{width: '30%', display: 'flex',alignItems: 'center'}}>
        <img src={bgLeft} alt=""  style={{height: '100vh'}}/>
    </div>
  )
}

export default LeftBackgroundImg