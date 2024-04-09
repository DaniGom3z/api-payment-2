import socketClient from 'socket.io-client'
import { ISocketIOInterface } from '../../domain/services/socket'

export class SocketIO implements ISocketIOInterface {
  private socket: any

  constructor() {
    this.socket = socketClient('http://localhost:443')
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data)
  }
}
