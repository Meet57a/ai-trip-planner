const mongoose = require("mongoose");

const dbConfig = {
    url: process.env.MONGOOSE_URL + process.env.DATABASE_NAME
}

const connect = async () => {
    
    try {
        
        await mongoose.connect(dbConfig.url, dbConfig.options);
        console.log('Connected to database' + dbConfig.url);
    } catch (error) {
        console.error('Error connecting to the database. \n', error);
        process.exit(1);
    }
}

module.exports = connect;   