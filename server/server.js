const express = require("express");
const app = express();
const router = require("./router/auth-router");

// Middleware to parse the incoming request body to JSON
app.use(express.json());

// Mounting the router on the /api/auth path
 app.use("/api/auth", router);



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
