const mongoose = require("mongoose");

const Connection = async (uri) => {
    try {
        await mongoose.connect(
            uri,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );
        console.log("Database connection established.");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = Connection;