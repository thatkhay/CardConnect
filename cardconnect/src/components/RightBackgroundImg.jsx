import React from 'react'
import TextField from '@mui/material/TextField'
function RightBackgroundImg() {
  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto'}}>
        
        
       <div style={{height: '50%', width: '50%' }}>

       <TextField id="outlined-basic" label="CARDHOLDER NAME" variant="outlined" />
       <TextField id="outlined-basic" label="CARD NUMBER" variant="outlined" />

       <div >

       <TextField id="outlined-basic" label="CARDHOLDER NAME" variant="outlined" />
       <TextField id="outlined-basic" label="CARD NUMBER" variant="outlined" />

       </div>

       </div>
        
        
    </div>
  )
}

export default RightBackgroundImg