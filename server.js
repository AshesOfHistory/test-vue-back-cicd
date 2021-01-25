let http = require('http')
let users = [
  {id: 1, name: 'zhufeng1'},
  {id: 2, name: 'zhufeng2'},
  {id: 3, name: 'zhufeng3'},
]
let server = http.createServer(function(req, res) {
  if (req.url === '/api/users') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(users))
  } else {
    res.end('not found')
  }
})
server.listen(3111, () => {
  console.log('已经启动在3111端口上')
})