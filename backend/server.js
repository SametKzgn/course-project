const express = require("express");
const cors = require("cors");
const {json} = require("body-parser");


const app = express()

const studentRoutes = require("./routes/studentRouter");
const courseRoutes = require("./routes/courseRouter");
const classRoutes = require("./routes/classRouter");
app.use(cors())
app.use(json());


app.use('/api/student', studentRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/class', classRoutes);

app.listen(3001, () => console.log(`Server started at http://localhost:3001`))