const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

////////////////////////////////////////jsonweb token example
// const jwt = require("jsonwebtoken");
// const myFunction = async () => {
// const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//  expiresIn: "27 days",
// });
//console.log(token);

// const data = jwt.verify(token, "thisismynewcourse");
//console.log(data)
//};
//myFunction();

///////////////////////////////////////// Task user relation
//const Task = require("./models/task");
//const User = require("./models/user");
//const main = async function () {
/* const task = await Task.findById("5edb57b9fe31a13cfca55b67");
  await task.populate("owner").execPopulate();
  console.log(task.owner); */
/* const user = await User.findById("5edb6ebe11619e211c928e45");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks); */
//};

//main();

//////////////////////////////////Uploda file //////////////////////////////////

/* const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
});

app.post("/upload", upload.single("upload"), (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send("Succesfully get the file");
});
 */
