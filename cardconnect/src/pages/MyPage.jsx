import React from 'react'
import LeftBackgroundImg from '../components/LeftBackgroundImg'
import RightBackgroundImg from '../components/RightBackgroundImg'
import { useState } from 'react';
import Cards from '../components/Cards'


function MyPage() {

  const [cardData, setCardDta] = useState('***************')

  const handleFormSubmit = (inputedVal) => {
    setCardDta(inputedVal)
  }

  return (
    <div style={{display: 'flex',height: '100vh'}} >
      <LeftBackgroundImg  />
  {cardData &&  <Cards data={cardData}/>}
      <RightBackgroundImg handleFormSubmit={handleFormSubmit}/>
    </div>
  )
}

export default MyPage