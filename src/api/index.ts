import { Router } from "express";
import authRouter from "./auth/auth.router";
import searchRouter from "./search/search.router";

export default (): Router => {
  const app = Router();
  app.use("/auth", authRouter());
  app.use("/search", searchRouter());
  return app;
};
