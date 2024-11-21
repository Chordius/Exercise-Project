const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },

        password: {
            type: String,
            required: true
        },

        aboutMe: {
            type: String,
            required: false
        },
        
    },
    {
        timestamps: true
    }
);

const dinoUser = mongoose.model("user", userSchema);

module.exports = dinoUser;

// if we want to return a user's data, we use the variable Dinosaurs
// who tf thought of using dinosaurs for this???