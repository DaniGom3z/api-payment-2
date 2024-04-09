import { PaymentApplication } from "../aplication/payment";
import { PaymentController } from "./controllers/paymentController";
import { PaymentRepository } from "./paymentRepository";
import { SocketIO } from "../infraestructure/services/socket.io";

const paymentRepository = new PaymentRepository();
const socketIO = new SocketIO();

const paymentUseCase = new PaymentApplication(paymentRepository, socketIO);
export const paymentController = new PaymentController(paymentUseCase);
