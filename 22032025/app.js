const http = require("http");
const fs = require("fs");
const routes = require("./routes");

const server = http.createServer(routes);

const port = 5000;
server.listen(port);
