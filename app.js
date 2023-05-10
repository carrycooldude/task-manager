const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const port = 3000;

// middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));


// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});
app.use('/api/v1/tasks', tasks);
app.listen(port, () => console.log(`Server running on port ${port}`));