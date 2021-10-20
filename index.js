const port = 8080
const express = require('express');
const app = express();
const prefix = "/service/"

const btoa = e => new Buffer.from(e).toString("base64")

const SmokeProxy = require("./smoke/smoke")

const smoke = new SmokeProxy(prefix, {
    docTitle: "Renegade"
})

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: './public'})
});

app.use(function (req, res) {
if (req.url.startsWith(prefix + "gateway")) {
  if (req.query.url.startsWith("https://") || req.query.url.startsWith("http://")) {
    res.redirect(prefix + btoa(req.query.url))
  } else {
    res.redirect(prefix + btoa("https://google.com?q=" + req.query.url))
  }
} else if (req.url.startsWith(prefix)) {
  return smoke.request(req, res)
} else {
  res.status(404).sendFile('404.html', {root: './public'})
}
}).post('*', (req, res) => {
  if (req.url.startsWith(prefix)) return smoke.post(req, res)
})

app.listen(process.env.PORT || port, () => {
  console.log('Riptide is live');
});