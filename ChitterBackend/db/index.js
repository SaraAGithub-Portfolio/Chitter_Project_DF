import mongoose from "mongoose";

const index = async () => {
    console.log(`Connecting to database at ${process.env.DBURI}`);
    try {
        await mongoose.connect(process.env.DBURI);
        console.log('Connected to DB');
    }
    catch (error) {
        console.error("Failed to connect to the database!", error);
        process.exit(1);
    }
}

export default index;

