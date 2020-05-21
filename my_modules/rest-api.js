const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/api/random-cat', (req, res) => {
  const cats = fs.readdirSync('./www/images')
  const ran = Math.floor(Math.random() * cats.length)
  res.json({ message: `images/${cats[ran]}` })
})

module.exports = router
