const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html> Harshit's first web page ");
    res.write(
      '<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Submit</button></form> </body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // console.log("");
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);

      body.push(chunk);
    });
    req.on("end", () => {
      // console.log();
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[0];
      console.log("message: ", message);
      fs.writeFileSync("messge.txt", message);
      console.log(parseBody);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.write("<html>Harshit first page</html>");
};

module.exports = requestHandler;
