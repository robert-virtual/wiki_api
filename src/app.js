const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/articles", require("./routes/articles"));

app.listen(port, () => {
  console.log("aplicacion ejecutandose en el puerto: ", port);
});
