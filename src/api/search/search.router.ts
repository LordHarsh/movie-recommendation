import { Router } from "express";
import { searchController, searchMovieController, searchTvController } from "./search.controller";
import { validateRequest } from "../../shared/middlewares/valiator";
import { searchSchema } from "./search.schema";

export default (): Router => {
    const router = Router();

    router.get("/", validateRequest('query', searchSchema), searchController);
    router.get("/movie", validateRequest('query', searchSchema), searchMovieController);
    router.get("/tv", validateRequest('query', searchSchema), searchTvController);

    return router;
}