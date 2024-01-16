import { Router } from "express";
import { getTrendingController } from "./trending.controller";

export default (): Router => {
    const app = Router();
    app.get('/', getTrendingController)
    return app;
}