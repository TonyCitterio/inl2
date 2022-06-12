const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
    song: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Song", SongSchema);