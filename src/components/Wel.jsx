import { Button, Typography,} from '@mui/material'

import React,{useState} from 'react'

const Wel = () => {
    var[input,setName]=useState()
    const changeName=(e)=>{
        setName("Welcome to Gallery")

    }
    const addName=()=>{
        setName("Welcome to home")

    }
    const inputHandler=()=>{
        setName("Welcome to contact us")
    }
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h4'color={'Highlight'}>{input} </Typography>&nbsp;
      <Button variant="contained" color="error"onClick={changeName}>Gallery</Button>&nbsp;
<Button variant="contained" color="info"onClick={addName}>Home</Button>&nbsp;
<Button variant="contained" color="inherit"onClick={inputHandler}>Contact us</Button>&nbsp;
    </div>
  )
}

export default Wel
