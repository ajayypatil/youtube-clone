import React from 'react'
import Button from './Button'
import { list } from '../utils/constants'

const ButtonList = () => {
 
  return (
    <div className='flex'>
      {list.map((btn, index)=>{
        return <Button  key={index} name={btn}/>
      })}
    </div>
  )
}

export default ButtonList