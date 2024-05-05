import mongoose from "mongoose";

const AssistantSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile_number: {
        type: String,
    },
    salary: {
        type: String,
    },
    department: {
        type: String,
    },
    assistant_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    role: {
        type: String,
    },
});

const AssistantModel = mongoose.model("Assistant", AssistantSchema);

const initializeSchema = async () => {
    try {
        const dummyAssistant = new AssistantModel({
            name: "John Doe",
            email: "john@example.com",
            mobile_number: "999999999",
            salary: "10000",
            department: "IT",
            role: "Assistant"
        });

        await dummyAssistant.save();
        
        console.log("Schema initialized and collection created successfully.");
    } catch (error) {
        console.error("Error initializing schema:", error);
    }
};

export { AssistantModel, initializeSchema };
