const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/myFitnessDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);