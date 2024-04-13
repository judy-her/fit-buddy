import Navbar from "./Navbar";

export function Header() {
  return (
    <div>
      <h1 className="text-6xlr">FitBuddy</h1>
      {/* <img className="headerImage" src="headerImage"></img> */}
      <Navbar />
    </div>
  );
}

export default Header;
