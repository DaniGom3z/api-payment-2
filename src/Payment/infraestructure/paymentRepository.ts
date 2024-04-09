import { Payment } from "../domain/payment";
import { IPayment } from "../domain/interface";
import { PrismaClient } from "@prisma/client";

export class PaymentRepository implements IPayment {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async payment(id: number, cantidad: number, estado: string, user: string): Promise<Payment> {
    const payment = await this.db.payment.update({
      data: {
        estado: "exitoso" 
      },
      where: {
        id:id
      }
    });

    return new Payment(payment.id,cantidad, "exitoso", user); 
  }
}
