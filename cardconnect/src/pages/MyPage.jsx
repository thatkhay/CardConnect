import React from 'react'
import LeftBackgroundImg from '../components/LeftBackgroundImg'
import RightBackgroundImg from '../components/RightBackgroundImg'

import Cards from '../components/Cards'


function MyPage() {
  return (
    <div style={{display: 'flex',height: '100vh'}} >
      <LeftBackgroundImg  />
      <Cards />
      <RightBackgroundImg />
    </div>
  )
}

export default MyPage