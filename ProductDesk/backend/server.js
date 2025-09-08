import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// A simple test route
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Server is running correctly!" });
});

// We have REMOVED the import for your router for this test
// app.use("/api/products", router); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Test server started on port ${PORT}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import router from "./routes/routes.js";
// import cors from "cors";
// import path from "path";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:3000"], // your frontend URLs
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // if using cookies / auth headers
//   })
// );

// app.use(express.json());
// app.use("/api/products", router);

// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }


// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     await connectDB(); // Wait for DB to connect
//     console.log("Database connected successfully");

//     app.listen(PORT, () => {
//       console.log("Server started at http://localhost:" + PORT);
//     });
//   } catch (err) {
//     console.error("Failed to start server:", err.message);
//     process.exit(1); // Exit if DB connection fails
//   }
// };

// startServer();
