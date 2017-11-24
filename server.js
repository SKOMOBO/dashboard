
// for error handling later

// import {register} from "bugsnag"
// register(require("./global_keys.json").bugsnag_key)

// import modules
const helmet = require("helmet")
const compress = require("compression")
const express = require("express")
const cors = require('cors')

//setup app
const app = express()

// Enable GZIP compression for improved performance
app.use(compress())

// Fix headers to make things more secure
app.use(helmet())

// directory we are serving the react app from
app.use(express.static("build"))

//! allow cross origin stuff for development disable for production
app.use(cors())

app.get("/who-am-i", (req, resp)=>{
    // resp.set('Access-Control', 'Allow-Origin')
    resp.json({first_name: "Ryan", last_name:"Weyers"})
})

app.listen(81, "localhost", ()=>{
    console.log("server started!")
})

