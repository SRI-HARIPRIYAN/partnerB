import express from "express";
import router from "./routes/user.routes.js";

const app = express();

app.use("/api", router);

app.listen(5001, (res) => {
	console.log("hey");
});
