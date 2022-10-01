const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit()
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form form action="/message"><input type="text" name="message"><button type="submit">Send</button></form></body > '
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFile("newfile.txt", message, function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      });

      res.statusCode = 200;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
