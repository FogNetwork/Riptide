const port = 8080
const express = require('express');
const app = express();
const Corrosion = require('./lib/server')

const proxy = new Corrosion({
    prefix: "/service/",
    codec: "plain",
    forceHttps: true,
    title: false,
    requestMiddleware: [
        Corrosion.middleware.blacklist([
            'accounts.google.com',
        ], 'Page is blocked'),
    ]
});

proxy.bundleScripts();

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: './public'})
});

app.use(function (req, res) {
  if (req.url.startsWith(proxy.prefix)) {
  proxy.request(req,res);
} else {
  res.status(404).send("404 Error")
}
})

app.listen(process.env.PORT || port, () => {
  console.log(`Riptide is running at localhost:${port}`)
});