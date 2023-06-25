import React from 'react'
import bgLeft from '../assets/images/bg-main-desktop.png'
function LeftBackgroundImg() {
  return (
    <div style={{width: '30%', display: 'flex',alignItems: 'center', height: '330px'}}>
        <img src={bgLeft} alt="" />
    </div>
  )
}

export default LeftBackgroundImg