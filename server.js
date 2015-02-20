var express = require('express')
var app = express()

var result = {
  "success": "true",
  "data": [
    {
      "name": "Josh",
      "title": "Developer"
    },
    {
      "name": "Perry",
      "title": "Developer"
    },
    {
      "name": "Max",
      "title": "CEO"
    }
  ]
}

app.get('/api/endpoint', function(req, res) {
  res.send(result)
  console.log('Got a request from host:', req.hostname, 'Origin:', req.headers.origin)
})

app.listen(3000);
console.log('Listening on port', 3000)
