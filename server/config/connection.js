const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitBuddy-DB';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected ... ');
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}

// module.exports = mongoose.connection;
module.exports = connectDB;
