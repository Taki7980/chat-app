"use client"

import React, { useCallback, useEffect } from 'react'
import { io } from 'socket.io-client'

interface ISocketContext {
      // eslint-disable-next-line no-unused-vars
      sendMessage: (msg: string) => any;
}



const SocketContext = React.createContext<ISocketContext | null>(null)

const SocketProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

      useEffect(() => {
            const _socket = io('http://localhost:8000');
            return () => {
                  _socket.disconnect();
            }
      }, [])


      const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
            console.log("send message", msg)
      }, [])


      return (
            <SocketContext.Provider value={{ sendMessage }}>
                  {children}
            </SocketContext.Provider>
      )
}

export default SocketProvider