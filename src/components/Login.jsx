import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    try {
      navigate("/main");
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

  const handleCreate = () => {
    try {
      navigate("/create");
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

  return (
    <div className="main">
      <h1 className="title">
        Lonneyy <span className="dot">.</span>
      </h1>
      <input type="email" className="email" placeholder="Email" />
      <input type="password" className="password" placeholder="Password" />
      <button className="signin" onClick={handleSignIn}>
        Sign in
      </button>
      <button className="create-account" onClick={handleCreate}>
        Create Account
      </button>
    </div>
  );
}

export default Login;
