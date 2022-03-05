declare namespace NodeJS {
    interface ProcessEnv {
    JWT_SECRET:string; 
    JWT_EXP:string;
    PORT: string;
    DB_URI: string;
    MONGO_URI:string;
    }
  }