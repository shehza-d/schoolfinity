// import { db } from "../db/index.mjs";
// import { ObjectId } from "mongodb";
import type { Request, Response } from "express";

const webhookHandler = async (req: Request, res: Response) => {
  res.status(200).send({ message: "All Faqs fetched" });
};

export { webhookHandler };
