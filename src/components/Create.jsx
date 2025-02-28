import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/main");
  };

  return (
    <div className="main">
      <h1 className="title">
        Lonneyy <span className="dot">.</span>
      </h1>
      <input type="text" className="username" placeholder="Username" />
      <input type="email" className="email" placeholder="Email" />
      <input type="password" className="password" placeholder="Password" />
      <button className="signin" onClick={handleSignIn}>
        Create Account
      </button>
    </div>
  );
}

export default Create;
