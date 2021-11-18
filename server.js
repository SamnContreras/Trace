const express = require("express");
const path = require("path");
const cors = require("cors");

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '795beb5ad25240629b875479e89f02f0',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express();
app.use(express.json());
app.use(cors());

app.get("/rollback", (req, res) => {
    rollbar.info("test");
    console.log("test")
    try {
        try_statements
      }
      catch (exception_var) {
        catch_statements
      }
      finally {
        finally_statements
      }
});

app.use(rollbar.errorHandler());

const port = process.env.PORT || 5501;

app.listen(port, () => {
    console.log(`Teleportation to ${port} was successful`);
});