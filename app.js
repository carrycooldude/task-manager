const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connet');
require('dotenv').config();
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.static('./public'));
//app.use(express.urlencoded({ extended: false }));
//app.listen(port, () => console.log(`Server running on port ${port}`));

// routes
app.use('/api/v1/tasks', tasks);

// connect to db
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();

