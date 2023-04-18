const express = require('express');
const app = express();


app.get("/login", (request, response) => {
    response.cookie("loggedin", "true");
    response.send("<h1> Respuesta con cookie! </h1>");
});



app.listen(8080, () => console.log("Express server en 8080"));