// Web 1: example.com:8080/login
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/login", (request, response) => {
response.cookie("loggedin", "true", { expires: new Date(Date.now() + 300000), domain: "example.com" });
response.send("Cookie sent!");
});

app.get("/read-cookie", (request, response) => {
if(request.cookies.loggedin == "true") { response.send("Logged"); }
else { response.send("Not logged"); }
});
app.listen(8080, () => console.log("Express server running on port 8080") );