import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function RightBackgroundImg({handleFormSubmit}) {
  const [inputedVal, setInputedVal] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
   })

   const handleChange = (e) => {
    setInputedVal({
      ...inputedVal,
      [e.target.name]: e.target.value,
    })
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputedVal);
    handleFormSubmit(inputedVal)
   }


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
       <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', flexDirection: 'column',}}>
      <TextField id="outlined-basic" label="CARDHOLDER NAME" variant="outlined" style={{marginBottom: '1rem'}} type='text' required name='input2' value={inputedVal.input2} onChange={handleChange}/>
<TextField id="outlined-basic" label="CARD NUMBER" variant="outlined" style={{marginBottom: '1rem'}} type="number" required name='input1' value={inputedVal.input1} onChange={handleChange}/>
      </div>

      <div style={{display: 'flex'}}>
      <TextField id="outlined-basic" label="MM" variant="outlined" style={{marginBottom: '1rem', width: '4rem', marginRight: '1rem',marginTop: '1rem'}} value={inputedVal.input3} type='number' name='input3'onChange={handleChange}inputProps={{min:1,max:99}}/>
      <TextField id="outlined-basic" label="YY" variant="outlined" style={{marginBottom: '1rem', width: '4rem', marginRight: '1rem',marginTop: '1rem'}} value={inputedVal.input4} type="number" name='input4'onChange={handleChange}inputProps={{min:0,max:99}}/>
      <TextField id="outlined-basic" label="CVC" variant="outlined" style={{marginBottom: '1rem', width: '7rem',marginTop: '1rem'}} type="number"  value={inputedVal.input5}  name='input5' onChange={handleChange} inputProps={{min:10,max:999}}/>
      </div>
      <Button variant="contained" style={{width: '20rem',marginTop: '1rem', backgroundColor: 'hsl(278, 68%, 11%)'}} type='submit'>confirm</Button>
      </form>
    </div>
    
  );
}

export default RightBackgroundImg;
