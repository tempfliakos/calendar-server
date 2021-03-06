require('dotenv').config();
const express = require("express");

const port = process.env.PORT || process.env.SERVER_PORT;

const app = express();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Headers", "*")
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', '*');
	next();
});
const reservesRouter = require('./routes/reservesRoute.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/reserves', reservesRouter);

app.get("/", (req, res) => {
	res.send("Running?...");
});

;(async () => {
	app.listen(port, () => {
		console.log(`Server is running on ${port}`);
	});
})();