import mongoose from "mongoose";

function initializeDb() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => { console.log("Connected to database!") })
        .catch((err) => { console.log(err) });
}

export default initializeDb;