import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentForm from "./components/comments/CommentForm";
import CommentFeed from "./components/comments/CommentFeed";

function App() {
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
