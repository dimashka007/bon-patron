const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
var bodyPaprses = require("body-parser")
var cors = require("cors")
const multer = require('multer')
let fs = require('fs-extra')
const path = require('path')
const app = express()

app.use(bodyPaprses.json());
app.use(cors());

const categories = require('./api/categories');
const posts = require('./api/posts');
const suggestedPosts = require('./api/suggestedPosts');
const websiteData = require('./api/websiteData');

app.use(categories);
app.use(posts);
app.use(suggestedPosts);
app.use(websiteData);
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

var storage = multer.diskStorage(
  {
      destination: (req, file, callback) => {
          let type = req.query.folder;
          let path = `${type}`;
          fs.mkdirsSync(path);
          callback(null, path);
        },
      filename: function ( req, file, cb ) {
          //req.body is empty...
          //How could I get the new_file_name property sent from client here?
          cb( null, file.originalname );
      }
  }
);

var upload = multer( { storage: storage } );

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({file: req.file})
}) ;

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
