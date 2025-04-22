import express from "express";
import { webhookHandler } from "../controllers/chatbot.js";

const router = express.Router();

router.get("/webhook", webhookHandler); // also accepts search query
// router.get("/faq/:id", getFaq);
// router.post("/faq", addFaq);
// router.patch("/faq/:id", updateFaq); //not tested
// router.delete("/faq/:id", deleteFaq); //not tested
// router.delete("/faqs", deleteAllFaqs); //not tested

export { router as faqRouter };
