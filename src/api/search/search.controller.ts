import { Request, Response, NextFunction } from "express";
import { searchService } from "./search.service";

export const searchController = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const data = await searchService({ searchTerm: req.query.searchTerm as string, searchType: "multi" });
        res.status(200).send({
            sucess: true,
            message: "Search results retrieved successfully!",
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const searchMovieController = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const data = await searchService({ searchTerm: req.query.searchTerm as string, searchType: "movie" });
        res.status(200).send({
            sucess: true,
            message: "Search results retrieved successfully!",
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const searchTvController = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const data = await searchService({ searchTerm: req.query.searchTerm as string, searchType: "tv" });
        res.status(200).send({
            sucess: true,
            message: "Search results retrieved successfully!",
            data,
        });
    } catch (error) {
        next(error);
    }
};