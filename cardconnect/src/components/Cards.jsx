import React from 'react'
import frontCard from '../assets/images/bg-card-front.png'
import backCard from '../assets/images/bg-card-back.png'
import cardLogo from '../assets/images/card-logo.svg'

function Cards() {
  return (
    <div style={{marginTop: '3rem', display: 'flex', flexDirection: 'column'}}>
        <img src={frontCard} alt="" style={{left:'-20rem', position: 'relative' , height: '15rem', boxShadow: '5px 25px 20px rgba(0, 0, 0, 0.2)',borderRadius: '1rem' }}/>
        <div style={{display: 'flex', flexDirection: 'column',  zIndex: '1', position: 'relative',left:'-18rem', top: '-12rem' , width:'7rem'}}>
          <img src={cardLogo} alt="" style={{height: '3rem', width: '5rem',position: 'relative', top: '-1rem'}} />
          <h2 style={{position: 'relative', top: '1rem', letterSpacing:'3px', color: 'hsl(270, 3%, 87%)'}}>00000000000000</h2>
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between', position: 'relative', top: '1rem' }}>
            <p style={{position: 'relative', left: '-1rem', color: 'hsl(270, 3%, 87%)'}}>jane gvvo</p>
            <span style={{position: 'relative', left: '17rem', color: 'hsl(270, 3%, 87%)'}}>00/00</span>
          </div>
        </div>
        <img src={backCard} alt="" style={{left:'-15rem', position: 'relative', top: '-7rem', height: '15rem', boxShadow: '5px 25px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem'}}/>
        {/* <h1 style={{position: 'absolute', top: '50%', left: '50%',  zIndex: '1'}}>Your Heading</h1> */}
    </div>
  )
}

export default Cards