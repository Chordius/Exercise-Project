const mongoose = require('mongoose');

const forumSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter your name"]
        },

        content: {
            type: String,
            required: true
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        },
    },
    {
        timestamps: true
    }
);

const dinoForums = mongoose.model("forums", forumSchema);
module.exports = dinoForums;

// if we want to return a user's data, we use the variable Dinosaurs
// who tf thought of using dinosaurs for this???