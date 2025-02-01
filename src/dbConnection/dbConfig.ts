import mongoose from "mongoose";

export async function dbConnect() {
    // if (mongoose.connection.readyState === 1) {
    //     console.log("Database is already connected")
    //     return
    // }
    try {
        await mongoose.connect(process.env.MONGODB_URI!) // connecting to the database
        
          const connection =  mongoose.connection
          connection.on("connected", () => { // if the connection is successful
            console.log("MongoDB connected successfully")     
          })

          connection.on("error", (error) => { // if the connection is failed 
            console.log("Error connecting to MongoDB", error);
            process.exit(1)
          })

    } catch (error) {
        console.log("Error connecting to database, please make sure the database is up and running:", error)
    }
}