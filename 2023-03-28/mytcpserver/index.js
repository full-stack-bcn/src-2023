const net = require("net");
const server = net.createServer();

server.on("connection", handleConnection);

server.listen(5000, "0.0.0.0", () => {
    console.log(`server listening ${JSON.stringify(server.address())}`);
})

function handleConnection(socket) {
  console.log(`Nuevo cliente desde ${socket.remoteAddress}:${socket.remotePort}`);
    socket.setEncoding("utf8");
    socket.on("data", onConnData);

    function onConnData(data) {
        socket.write(data.toUpperCase());
    }


}