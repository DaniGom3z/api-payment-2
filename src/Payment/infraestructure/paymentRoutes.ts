import { Router } from "express";
import { paymentController } from "./paymentDependencies";

const router = Router();
router.post("/", paymentController.run.bind(paymentController));
export default router;

