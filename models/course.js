const { Schema, Model } = require("mongoose")
const mongoose = require('mongoose')
const courseSchema = new Schema(
    {
        name: String,
        thumbnail: String,
        videos: [
            {
                title: String, 
                videoUrl:String, 
                duration: String
            }
        ]
    },
    {
        timestamp: true,
    }
)

module.exports = mongoose.model("Course", courseSchema, "Courses")