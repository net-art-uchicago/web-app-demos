const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const restAPI = require('./my_modules/rest-api.js')
const port = 8000

app.use(bodyParser.json())
app.use(restAPI)
app.use(express.static('www'))

app.listen(port, (err) => {
  if (err) return console.log(err)
  console.log(`
    Listening on http://localhost:${port}
    Document root is ${__dirname}
    Press Ctrl-C to quit.
  `)
})
