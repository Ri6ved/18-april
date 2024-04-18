import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName] = useState("zid")
    const changeName = ()=>{
        console.log("btn clicked");
        setName("parker")
     }

  return (
    <div>
      <Typography variant='h4'>My name is {name}</Typography>
      <Button variant='contained'onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics
