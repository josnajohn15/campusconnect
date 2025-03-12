require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

// ✅ Load the college knowledge base
const knowledgeBase = JSON.parse(fs.readFileSync("college_data.json", "utf-8"));

async function queryHuggingFace(question) {
    const apiKey = process.env.HUGGINGFACE_API_KEY;
    const model = "HuggingFaceH4/zephyr-7b-beta";

    console.log("API Key:", apiKey ? "Loaded" : "Not Loaded!");  // Debugging step

    // ✅ Step 1: Check if the answer is in our local knowledge base FIRST
    let lowerQuestion = question.toLowerCase();

    for (let category in knowledgeBase) {
        for (let key in knowledgeBase[category]) {
            if (lowerQuestion.includes(key.toLowerCase())) {
                console.log("✅ Bot Response (from knowledge base):", knowledgeBase[category][key]);
                return knowledgeBase[category][key]; // ✅ Return answer from knowledge base
            }
        }
    }

    // ✅ Step 2: If not found, ask Hugging Face
    try {
        const response = await axios.post(
            `https://api-inference.huggingface.co/models/${model}`,
            { inputs: question },
            { headers: { Authorization: `Bearer ${apiKey}` } }
        );

        if (response.data && response.data.length > 0 && response.data[0].generated_text) {
            return response.data[0].generated_text;
        } else {
            return "Sorry, I couldn't find an answer to your question.";
        }
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return "An error occurred while fetching the response.";
    }
}

// ✅ Export the function for use in `server.js`
module.exports = { queryHuggingFace };