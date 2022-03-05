import * as dotenv from 'dotenv'
const { dbConnect } = require("./db");
import express from "express"
const morgan = require("morgan");

import routes from "./routes "

const app = express();


app.use(express.json());
app.use(morgan("dev"));


app.use(routes);

app.get("/", async(req, res)=>{
	return res.status(200).send("welcome to my Typescript URL_Shortner Application")
  })


const port = process.env.PORT
async function bootstrap() {
	try {
		await dbConnect();

		app.listen(port, () => {
			console.log(`now listening for requests on port ${port}...`);
		});

	} catch (e:any) {
		console.error("an error occurred while starting the server");
		console.error(e.message);
		process.exit(1);
	}

}

bootstrap();

export default app;