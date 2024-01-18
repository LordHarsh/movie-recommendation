import dotenv from "dotenv";
dotenv.config();
//process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  port: parseInt(process.env.PORT as string, 10) || 3000,
  databaseUrl: process.env.MONGODB_URI!,
  jwtSecret: process.env.JWT_SECRET!,
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  tmdb: {
    api_key: process.env.TMDB_API_KEY!,
    api_url: process.env.TMDB_API_URL!,
  },
  api: {
    prefix: "/api",
  },
};
