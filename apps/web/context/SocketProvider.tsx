"use client"

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface ISocketContext {
      // eslint-disable-next-line no-unused-vars
      sendMessage: (msg: string) => any;
}



const SocketContext = React.createContext<ISocketContext | null>(null)

export const useSocket = () => {
      const state = useContext(SocketContext)
      if (!state) { throw new Error('state is undefined') };
      return state
}

const SocketProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
      const [socket, setSocket] = useState<Socket>()

      useEffect(() => {
            const _socket = io('http://localhost:8000');
            setSocket(_socket)
            return () => {
                  _socket.disconnect();
                  setSocket(undefined)
            }
      }, [])


      const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
            console.log("send message", msg)
            if (socket) {
                  socket.emit('event:message', { message: msg });
            }
      }, [socket])


      return (
            <SocketContext.Provider value={{ sendMessage }}>
                  {children}
            </SocketContext.Provider>
      )
}

export default SocketProvider