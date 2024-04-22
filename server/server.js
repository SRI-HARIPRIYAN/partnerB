import express from "express";

const app = express();

app.use("/api", router);

app.listen(5001, (res) => {
	console.log("hey");
});
