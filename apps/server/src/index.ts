import http from 'http'
import SocketService from './services/socket'


const init = async () => {
      const socketService = new SocketService();
      const server = http.createServer()
      const PORT = process.env.PORT || 8000

      socketService.io.listen(server)
      server.listen(PORT, () => console.log('listening on port 8000'))
      socketService.initListeners()
}
init()