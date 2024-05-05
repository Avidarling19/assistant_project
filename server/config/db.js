import mongoose from "mongoose";
import { AssistantModel, initializeSchema }  from "../model/assistant.js";

const uri = "mongodb://localhost:27017/assistants_project";

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (mongoose.connection.readyState === 1) {
            console.log("Successfully connected to MongoDB");
            
            
          //  await mongoose.connection.db.createCollection("assistants");
            //initializeSchema();
            console.log("Collection 'assistants' created successfully.");

        } else {
            console.log("Failed to connect to MongoDB");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default ConnectToMongo;
