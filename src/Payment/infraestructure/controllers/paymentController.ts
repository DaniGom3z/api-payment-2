import { PaymentApplication } from "../../aplication/payment";
import { Request, Response } from "express";

export class PaymentController {
  constructor(private paymentApplication: PaymentApplication) { }
  async run(req: Request, res: Response) {
    const { id, cantidad,estado, user} = req.body;
    const payment = await this.paymentApplication.run(id,  cantidad,estado, user);
    res.json({
      code: 200,
      estado: payment,
      message: "Pago exitoso"
    });
  }
}
