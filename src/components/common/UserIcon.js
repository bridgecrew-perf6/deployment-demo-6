import "./UserIcon.css";

function UserIcon({ image }) {
  return (
    <div className="user-icon">
      <img src={image} alt="user icon" />
    </div>
  );
}

export default UserIcon;
