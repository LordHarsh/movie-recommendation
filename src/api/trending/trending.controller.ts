import { NextFunction, Request, Response } from "express";
import { trendingService } from "./trending.service";

export const getTrendingController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        const data = await trendingService();
        res.status(200).json({
            success: true,
            message: "Trending movies fetched successfully",
            data,
        });
    } catch(error) {
        next(error);
    }
};