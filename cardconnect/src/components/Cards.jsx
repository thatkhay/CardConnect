import React from 'react'
import frontCard from '../assets/images/bg-card-front.png'
import backCard from '../assets/images/bg-card-back.png'

function Cards() {
  return (
    <div style={{marginTop: '3rem', display: 'flex', flexDirection: 'column'}}>
        <img src={frontCard} alt="" style={{left:'-20rem', position: 'relative' , height: '15rem', boxShadow: '5px 25px 20px rgba(0, 0, 0, 0.2)',borderRadius: '1rem' }}/>
        <img src={backCard} alt="" style={{left:'-15rem', position: 'relative', marginTop: '2rem', height: '15rem', boxShadow: '5px 25px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem'}}/>
    </div>
  )
}

export default Cards