const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get("/login", (request, response) => {
    response.cookie("loggedin", "123456", { path: "/", domain: "example.com"});
    response.send("<h1> Respuesta con cookie! </h1>");
});

app.get("/readcookie", (request, response) => {
    if(request.cookies.loggedin == "123456") {
        response.send("Jose, you are logged in");
    } else {
        response.send("No te conozco, logate");
    }
})

app.listen(8080, () => console.log("Express server en 8080"));