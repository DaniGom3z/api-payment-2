import { IPayment } from "../domain/interface";

import { ISocketIOInterface } from "../domain/services/socket";

export class PaymentApplication {
  constructor(private payment: IPayment, private socket: ISocketIOInterface) { }
  async run(id: number, cantidad: number,estado:string ,user: string,) {
    const payment = await this.payment.payment(id, cantidad,estado, user);
    this.socket.emit("payment", payment);
    console.log('payment-saved')
    return true
  }
}
