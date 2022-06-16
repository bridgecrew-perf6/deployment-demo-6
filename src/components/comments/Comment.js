export default function Comment({ comment }) {
  console.log(comment);
  return (
    <div>
      <h1>{comment.author}</h1>
      <p>{comment.comment}</p>
    </div>
  );
}
