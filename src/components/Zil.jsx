import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Zil = () => {
    var[input,setInput]= useState();
    var[data,setData]= useState();
    const inputHandler =(e) =>{
        console.log(e.target.value);
        setInput(e.target.value)
    }
    const addname = ()=>{
      setData(input)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{data}</Typography>
        <TextField onChange={inputHandler}
            variant='outlined' label='Enter Your Name'>  </TextField>
             <br></br>          <br></br>
             <Button variant='contained'onClick={addname}>Change</Button>
      
      
    </div>
  )
}

export default Zil
