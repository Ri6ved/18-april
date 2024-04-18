import { Button, Typography } from '@mui/material'
import React,{useState}from 'react'
import AddIcon from '@mui/material'
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Counter = () => {
    var[count,setCount]=useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount(count-1)
    }

  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h4'>{count}</Typography>
      <br>
      </br>
      
      <Button onClick={increment}><ArrowUpwardIcon></ArrowUpwardIcon></Button>
      <Button onClick={decrement}><ArrowDownwardIcon></ArrowDownwardIcon></Button>
    </div>
  )
}

export default Counter
