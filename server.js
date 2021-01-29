let http = require('http')
let users = [
  {id: 12345, name: 'zhufeng1'},
  {id: 222, name: 'zhufeng2'},
  {id: 333, name: 'zhufeng3'},
]
let server = http.createServer(function(req, res) {
  if (req.url === '/api/users') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(users))
  } else {
    res.end('not found')
  }
})
server.listen(3100, () => {
  console.log('已经启动在3100端口上')
})