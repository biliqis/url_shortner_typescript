
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({path:require('find-config')('.env')});

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  // JWT_SECRET:string | undefined;
  // JWT_EXP:string | undefined;
  PORT: number | undefined;
  DB_URI:string | undefined;
 // MONGO_URI: string | undefined;
}

interface Config {
    // JWT_SECRET:string | undefined;
    // JWT_EXP:string | undefined;
    PORT: number | undefined;
    DB_URI:string | undefined;
    MONGO_URI: string | undefined;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
      // JWT_SECRET:process.env.JWT_SECRET,
      // JWT_EXP:process.env.JWT_EXP,
      PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
      DB_URI:process.env.DB_URI,
      //MONGO_URI: process.env.MONGO_URI
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig