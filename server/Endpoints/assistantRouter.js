// Import necessary modules and models
import express from "express";
import { AssistantModel, initializeSchema } from "../model/assistant.js";

// Create an Express router
const router = express.Router();

// Route handler for creating a new assistant
router.post("/assistant", async (req, res) => {
    try {
        // Extract assistant details from the request body
        const { name, email, mobile_number, salary, department, role } = req.body;

        // Create a new assistant document
        const assistant = new AssistantModel({
            name,
            email,
            mobile_number,
            salary,
            department,
            role
        });

        // Save the assistant document to the database
        await assistant.save();

        // Return the id of the newly created assistant
        res.status(201).json({ id: assistant._id });
    } catch (error) {
        // Handle any errors that occur during the creation process
        console.error("Error creating assistant:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Route handler for retrieving the details of an assistant
router.get("/assistant/:assistant_id", async (req, res) => {
    try {
        // Extract the assistant_id from the request parameters
        const { assistant_id } = req.params;

        // Find the assistant document by id
       // const assistant = await AssistantModel.findById(assistant_id);
       const assistant = await AssistantModel.findOne({ assistant_id });

        // If assistant is not found, return 404 Not Found
        if (!assistant) {
            return res.status(404).json({ error: "Assistant not found" });
        }

        // Return the details of the assistant
        res.json(assistant);
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        console.error("Error retrieving assistant:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Route handler for updating the details of an assistant
router.put("/assistant/:assistant_id", async (req, res) => {
    try {
        // Extract the assistant_id from the request parameters
        const { assistant_id } = req.params;

        // Find the assistant document by id and update its details
       
        const updatedAssistant = await AssistantModel.findOneAndUpdate(
            { assistant_id }, // Search by assistant_id field
            req.body, // Update with the data from the request body
            { new: true } // Return the updated document
        );

        // If assistant is not found, return 404 Not Found
        if (!updatedAssistant) {
            return res.status(404).json({ error: "Assistant not found" });
        }

        // Return the updated details of the assistant
        res.json(updatedAssistant);
    } catch (error) {
        // Handle any errors that occur during the update process
        console.error("Error updating assistant:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



router.delete("/assistant/:assistant_id", async (req, res) => {
    try {
        // Extract the assistant_id from the request parameters
        const { assistant_id } = req.params;


        const deletedAssistant = await AssistantModel.findOneAndDelete({ assistant_id });

        // If assistant is not found, return 404 Not Found
        if (!deletedAssistant) {
            return res.status(404).json({ error: "Assistant not found" });
        }

        // Return a success message
        res.json({ message: "Assistant deleted successfully" });
    } catch (error) {
        // Handle any errors that occur during the deletion process
        console.error("Error deleting assistant:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
export default router;
