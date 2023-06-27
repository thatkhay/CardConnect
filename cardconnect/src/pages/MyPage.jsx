import React from 'react'
import LeftBackgroundImg from '../components/LeftBackgroundImg'
import RightBackgroundImg from '../components/RightBackgroundImg'
import { useState } from 'react';
import Cards from '../components/Cards'
import Thankyou from '../components/Thankyou';


function MyPage() {

  const [cardData, setCardDta] = useState('***************')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (inputedVal) => {
    setCardDta(inputedVal)
    setFormSubmitted(true)
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftBackgroundImg />
      <Cards data={cardData} />
      {formSubmitted ? (
        <Thankyou />
      ) : (
        <RightBackgroundImg handleFormSubmit={handleFormSubmit} />
      )}
       
    </div>
  );
}

export default MyPage