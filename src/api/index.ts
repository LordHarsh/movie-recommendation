import { Router } from "express";
import authRouter from "./auth/auth.router";
import searchRouter from "./search/search.router";
import trendingRouter from "./trending/trending.router";

export default (): Router => {
  const app = Router();
  app.use("/auth", authRouter());
  app.use("/search", searchRouter());
  app.use("/trending", trendingRouter());
  return app;
};
