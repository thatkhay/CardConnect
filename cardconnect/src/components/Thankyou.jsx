import React from 'react'
import completeIcon from '../assets/images/icon-complete.svg'
import Button from '@mui/material/Button';

function Thankyou() {
const handleContinue = () => {
    window.location.reload()
}

  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginLeft: '-4rem'}}>

<img src={completeIcon} alt="" />
<h3>Thank you</h3>
<p>We added you card details</p>
<Button variant="contained" style={{width: '20rem',marginTop: '1rem', backgroundColor: 'hsl(278, 68%, 11%)'}} type='submit' onClick={handleContinue}>continue</Button>
        
    </div>
  )
}

export default Thankyou