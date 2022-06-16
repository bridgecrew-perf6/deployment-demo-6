import { Component } from "react";
import UserIcon from "../common/UserIcon";
import "./CommentForm.css";
import { BsSearch as Search } from "react-icons/bs";
import { commentsCollection, addDoc } from "../../firebase";

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { comment } = this.state;
    const { videoId } = this.props;
    try {
      await addDoc(commentsCollection, {
        author: "myrasmith",
        comment,
        videoId,
      });
      console.log("success!");
    } catch (e) {
      console.log("error storing firebase doc:", e);
    } finally {
      this.setState({ comment: "" });
    }
  };

  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
          <UserIcon image={process.env.REACT_APP_USER_ICON_IMAGE} />
        </label>
        <input
          placeholder="Add a comment..."
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={this.handleChange}
        />
        <button type="submit">
          <Search />
        </button>
      </form>
    );
  }
}

export default CommentForm;
