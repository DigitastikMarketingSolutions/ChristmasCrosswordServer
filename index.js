const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser")

const Connection = require("./config/dbConnect");
const userRoute = require("./routes/user");


dotenv.config();
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(express.json());

// Database
Connection(process.env.MONGO_URI.toString());

// Routes
app.use("/", userRoute);


// Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
