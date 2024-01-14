import generateToken from "../../shared/jwt";
import database from "../../loaders/mongo";
import bcrypt from "bcrypt";

export const signupService = async (params: {
  name: string;
  email: string;
  password: string;
}): Promise<string> => {
  const collection = (await database()).collection("users");
  const exists = await collection.findOne({ email: params.email });
  if (exists) throw new Error("User already exists");
  const saltRounds = 10;
  const hash = await bcrypt.hash(params.password, saltRounds);
  await collection.insertOne({
    name: params.name,
    email: params.email,
    password: hash,
    registeredAt: new Date(),
    updatedAt: new Date(),
    isDeleted: false,
  });

  return generateToken(params.email);
};

// Service for user login

export const loginService = async (params: {
  email: string;
  password: string;
}): Promise<string> => {
  const collection = (await database()).collection("users");
  const user = await collection.findOne({ email: params.email });
  if (!user) throw new Error("User does not exist");
  const match = await bcrypt.compare(params.password, user.password);
  if (!match) throw new Error("Incorrect password");
  return generateToken(params.email);
};
