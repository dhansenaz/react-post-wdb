const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()

const app = express();
const PORT = 4000;

const ctrl = require('./controller')

app.use(bodyParser.json())

const massive = require('massive')
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.post('/api/postlisting',ctrl.postListing)


app.listen(PORT, () => console.log("listening on PORT 4000"))