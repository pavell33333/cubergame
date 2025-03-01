const io = require("socket.io")(3001, {
    cors: { origin: "*" },
  });
  
  io.on("connection", (socket) => {
    console.log("Новый пользователь подключен");
    socket.on("message", (msg) => io.emit("message", msg));
  });
  
