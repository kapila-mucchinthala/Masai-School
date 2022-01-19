const app = require("./index");

const connect = require("./configs/db");

app.listen(4321, async function () {
  await connect();
  console.log("Listening on port 4321");
});