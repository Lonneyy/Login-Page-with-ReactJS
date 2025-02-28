import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <h1 className="title-main">
        Welcome To{" "}
        <span className="name">
          Lonneyy <span className="dot">.</span>
        </span>
      </h1>
      <button onClick={() => navigate("/")} className="signout">
        Sign Out
      </button>
    </div>
  );
}

export default Main;
