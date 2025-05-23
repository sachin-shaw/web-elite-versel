import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
//import path from "path";

//configure env
dotenv.config({ path: "./config/config.env" });

//databse config
connectDB();

//rest object
const app = express();

//middelwares
//app.use(cors());

app.use(cors({
  origin: 'https://web-elite-versel-8wfv.vercel.app', // Vercel frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// app.options("*", cors());

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

//PORT
const PORT = process.env.PORT || 5000;

//run listen
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
