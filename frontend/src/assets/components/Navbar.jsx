import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-wrapper">
        <ul className="home-nav-ul">
          <li className="nav-ul-li">
            <p className="nav-title">MMDb</p>
            <p className="nav-star">⭐️</p>
          </li>
          <li className="nav-ul-li">
            <input type="text" placeholder="Search..." />
            <button>Submit</button>
          </li>
          <li>
            <p>Add your own</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
