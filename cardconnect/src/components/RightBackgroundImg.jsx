import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function RightBackgroundImg() {
  return (
   
    <div
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', left: '-10rem'
      }}
    >
       <form>
      <div style={{display: 'flex', flexDirection: 'column',}}>
      <TextField id="outlined-basic" label="CARDHOLDER NAME" variant="outlined" style={{marginBottom: '1rem'}} type='text' required/>
<TextField id="outlined-basic" label="CARD NUMBER" variant="outlined" style={{marginBottom: '1rem'}} type="number" required/>
      </div>

      <div style={{display: 'flex'}}>
      <TextField id="outlined-basic" label="MM" variant="outlined" style={{marginBottom: '1rem', width: '4rem', marginRight: '1rem',marginTop: '1rem'}} type='number' />
      <TextField id="outlined-basic" label="YY" variant="outlined" style={{marginBottom: '1rem', width: '4rem', marginRight: '1rem',marginTop: '1rem'}} type="number"/>
      <TextField id="outlined-basic" label="CVC" variant="outlined" style={{marginBottom: '1rem', width: '7rem',marginTop: '1rem'}} type="number"/>
      </div>
      <Button variant="contained" style={{width: '20rem',marginTop: '1rem', backgroundColor: 'hsl(278, 68%, 11%)'}}>confirm</Button>
      </form>
    </div>
    
  );
}

export default RightBackgroundImg;
