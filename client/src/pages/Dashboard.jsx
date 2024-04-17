import { Link } from "react-router-dom";
import "./dashboard.scss";
import logoIcon from "../assets/image/logo.png";

function Dashboard() {
  const toRegisterPage = () => {
    window.location.href = "signup";
  }

  const toLoginPage = () => {
    window.location.href = "login";
  }

  return (
    <div className="home-page">
      <div className="logo">
        <div className="logo-img"></div>
        FIT BUDDY
      </div>

      <div className="content">
        <h1>
          BE YOUR <span>BEST</span>
        </h1>
        <div className="actions">
          <button className="" onClick={() => toRegisterPage()}>JOIN TODAY</button>
          <button className="" onClick={() => toLoginPage()}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
