const express = require("express");
const cors = require("cors");
const os = require("os");
const http = require("http");
const productRoutes = require("./routes/products");

const app = express();
const fORT = 4000;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
server.on("request", (req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
});

app.use("/products", productRoutes);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("📊 System Info:");
  console.log(`Platform: ${os.platform()}`);
  console.log(`Architecture: ${os.arch()}`);
  console.log(`CPU Cores: ${os.cpus().length}`);
  console.log(`Hostname: ${os.hostname()}`);
});
