import React from 'react'
import LeftBackgroundImg from '../components/LeftBackgroundImg'
import RightBackgroundImg from '../components/RightBackgroundImg'


function MyPage() {
  return (
    <div style={{display: 'flex',height: '100vh'}} >
      <LeftBackgroundImg  />
      <RightBackgroundImg />
    </div>
  )
}

export default MyPage