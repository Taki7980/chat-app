import { Server } from 'socket.io'

class SocketService {
      private _io: Server;
      constructor() {
            console.log("SocketService");
            this._io = new Server({
                  cors:{
                        allowedHeaders:["*"],
                        origin:"*",
                  }
            });
      }

      public initListeners() {
            const oi = this.io;
            console.log("Socketlisterners initialized")
            oi.on('connect', (socket) => {
                  console.log('a user connected', socket.id);
                  socket.on('event:message', async ({ message }: { message: String }) => {
                        console.log("New message revieved", message);
                  })
                  socket.on('disconnect', () => {
                        console.log('user disconnected');
                  });

            })
      }

      get io() {
            return this._io;
      }
}

export default SocketService;