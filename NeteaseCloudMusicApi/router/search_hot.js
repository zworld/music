const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    "csrf_token": "",
		type: req.query.type  || 1,
		s: keywords || req.query.keywords || ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/methods/search/hot?type=1',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})



module.exports = router
