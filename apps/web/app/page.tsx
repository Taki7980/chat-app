'use client'

import React,{useState} from 'react'
import classes from './page.module.css'
import { useSocket } from '../context/SocketProvider'

const page = () => {
      const {sendMessage} = useSocket()
      const [message,setMessage] = useState('')
      return (
            <div className={classes.container}>
                  <div className={classes.box}>
                        <div className="">
                              <h1 className="">All messages are here</h1>
                        </div>
                        <div className="">
                              <input onChange={(e)=>{setMessage(e.target.value)}} className={classes.chatInput} type="text" placeholder='Enter text here' />
                              <button onClick={()=>{sendMessage(message)}} className={classes.button}>Send</button>
                        </div>
                  </div>
            </div>
      )
}

export default page