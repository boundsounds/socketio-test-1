const app = require('express')()
const options = {
  cors: true,
  origins: ["http://localhost:3000"],
};
const http = require("http").createServer(app);
const io = require("socket.io")(http, options);


io.on('connection', socket => {
    socket.on('message', ({name, message}) => {
    
        io.emit('message',{name, message})
    })
})


http.listen(3000, function() {
    console.log('listening on port 3000')
})