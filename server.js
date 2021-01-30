let http = require('http')
let users = [
  {id: 12234, name: 'zhufeng1'},
  {id: 222, name: 'zhufeng2'},
  {id: 3, name: 'zhufeng3'},
  {id: 444, name: 'zhufeng4'},
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