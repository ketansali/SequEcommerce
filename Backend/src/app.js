const http = require("http");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const server = http.createServer(app);
require("./db/conn");
require("./db/tables");
const adminAuthRoutes = require("./routes/admin/Auth.routes");

//All Routes
app.use(express.json());
app.use("/api", adminAuthRoutes);

server.listen(PORT, () => {
  console.log(`Server is Running On PORT ${PORT}`);
});
