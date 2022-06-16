import { Component } from "react";
import withRouter from "../hoc/withRouter";
import CommentForm from "./CommentForm";
import {
  commentsCollection,
  getCommentsByVideo,
  query,
  onSnapshot,
  where,
} from "../../firebase";

class CommentFeed extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  subscribeToVideoComments = (videoId) => {
    const q = query(commentsCollection, where("videoId", "==", videoId));
    return onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });
      this.setState({ comments });
    });
  };

  componentDidMount() {
    const {
      params: { videoId },
    } = this.props;

    getCommentsByVideo(videoId)
      .then((comments) => {
        this.setState({ comments });
      })
      .catch((e) => console.error(e));

    this.unsubscribe = this.subscribeToVideoComments(videoId);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {
      params: { videoId },
    } = this.props;

    return <CommentForm videoId={videoId} />;
  }
}

export default withRouter(CommentFeed);
