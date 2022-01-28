const mongoose= require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    director : String,
    stars: [{type:String}],
    image: String,
    description: String,
    showTime:[{type:String}],
})

module.exports  = mongoose.model("Movie", movieSchema)