const connect = require("./config/db");

const app = require("./index");

app.listen(1231, async function () {
  await connect();
  console.log("Listening on port 1231");
});