const express = require("express");
const songRouter = express.Router();
const Song = require("../models/Song");

//getting song list
songRouter.get("/getsongs", (req, res) => {
  Song.find({}, (err, documents) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: "Couldn't get song list",
          msgError: true,
        },
      });
    } else {
      res.status(200).json({ songs: documents });
    }
  });
});

//adding songs to song list
songRouter.post("/newsong", (req, res) => {
  const newSong = new Song({
    song: req.body.song,
    artist: req.body.artist,
  });
  newSong.save((err) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: "Couldn't save song",
          msgError: true,
        },
      });
    } else {
      res.status(201).json({
        msg: {
          msgBody: "Song was saved",
          msgError: false,
        },
      });
    }
  });
});

//update song
songRouter.put("/updatesong/:id", (req, res) => {
  Song.findByIdAndUpdate(
    req.params.id,
    { song: req.body.song, artist: req.body.artist },
    (err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "Couldn't update song",
            mgsError: true,
          },
        });
      } else {
        res.status(200).json({
          msg: {
            msgBody: "Song was successfully updated",
            msgError: false,
          },
        });
      }
    }
  );
});

//delete song
songRouter.delete("/deletesong/:id", (req, res) => {
  Song.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      res.status(500).json({
        msg: {
          msgBody: "Couldn't delete song",
          msgError: true,
        },
      });
    }else {
      res.status(200).json({
        msg: {
          msgBody: "Song was deleted",
          msgError: false,
        },
      });
    }
  });
});

module.exports = songRouter;
