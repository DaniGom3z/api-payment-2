import express from 'express';
import PaymentRouter from './src/Payment/infraestructure/paymentRoutes'; 

const app = express();
const port = 5000;

app.use(express.json());
app.use('/payment', PaymentRouter);

app.listen(port, () => {
  console.log(`Server corriendo en puerto ${port}`);
});
