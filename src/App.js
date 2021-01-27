import React, { useRef, useState } from "react";
import "./App.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { IconButton } from "@material-ui/core";

function App() {
  const videoRef = useRef(null);
  const [bookmarks, setBookmarks] = useState([]);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
    } else if (control === "pause") {
      videoRef.current.pause();
    }
  };

  const addBookmark = () => {
    setBookmarks([...bookmarks, videoRef.current.currentTime]);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="app">
      <div className="app__video">
        <h1>Wildlife National Anthem of India</h1>
        <video
          ref={videoRef}
          controls
          src="https://firebasestorage.googleapis.com/v0/b/am-beats.appspot.com/o/test%2FWild%20India%20Jana%20Gana%20Mana%20National%20Anthem%20of%20India%20HD.mp4?alt=media&token=4c481bca-35a8-4e3d-bb1a-44d1852333f9"
        ></video>
        <div className="app__video--controls">
          <IconButton onClick={() => videoHandler("pause")}>
            <PauseIcon />
          </IconButton>
          <IconButton onClick={() => videoHandler("play")}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton onClick={addBookmark}>
            <BookmarkIcon />
          </IconButton>
        </div>
      </div>
      <div className="app__bookmarks">
        <h1>Bookmarks</h1>
        <div className="app__bookmarksContainer">
          {bookmarks.map((bookmark) => (
            <p key={bookmark}>{`Bookmarked at ${getTime(bookmark)}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

/*
CHALLENGE TIME
1) Play Button when video is paused & pause button when video is playing
2) Whenever the user clicks on a particular p tag, it should take the video to that bookmarked timestamp

ALL THE BEST👍👍👍
*/
