import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentForm from "./components/comments/CommentForm";
import CommentFeed from "./components/comments/CommentFeed";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&id=RI0BDz4KRIw`
    )
      .then((res) => res.json())
      .then((data) => console.log("got data from api:", data))
      .catch((err) => console.warn("something went wrong", err));
  });

  return (
    <div className="App">
      <h1>YouTube</h1>
      <Router>
        <Routes>
          <Route path="/videos/:videoId" element={<CommentFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
