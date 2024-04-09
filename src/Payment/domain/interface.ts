import { Payment } from "./payment";

export interface IPayment {
  payment(
    id: number,
    cantidad: number,
    estado: string,
    user: string,
  ): Promise<Payment>;
}
