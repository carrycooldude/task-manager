const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://carrycooldude:<password>@task-manager.xdvaniv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });