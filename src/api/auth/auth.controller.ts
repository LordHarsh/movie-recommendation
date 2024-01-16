import { Request, Response, NextFunction } from "express";
import { loginService, signupService } from "./auth.service";

export const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await signupService({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res
      .status(201)
      .send({
        success: true,
        message: "User created successfully!",
        data: { token },
      });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await loginService({
      email: req.body.email,
      password: req.body.password,
    });
    res
      .status(200)
      .send({
        success: true,
        message: "User logged in successfully!",
        data: { token },
      });
  } catch (error) {
    next(error);
  }
};
