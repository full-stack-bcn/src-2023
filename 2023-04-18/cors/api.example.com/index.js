const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({
    origin: ["http://example.com:8080", "http://www.test.com:8088"],
    // Access-Control-Allow-Origin
    credentials: true // este server va a enviar la header 
                      // Access-Control-Allow-Credentials: true
}));

app.get("/resources", (request, response) => {
    if(request.cookies.loggedin == "true") {
        response.send({tasks: [1,2]});
    } else {
        response.send(null);
    }
})

app.listen(12345)