import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg container">
      <Link className="logo" href="/">
        Joshua Edo
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item">
            <Link className="nav-link" href="/">
              <i className="fas fa-home" id="link"></i>Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/stacks">
              <i className="fas fa-server" id="link"></i>Stacks
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/projects">
              <i className="fas fa-code" id="link"></i>Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              <i className="fas fa-address-book" id="link"></i>Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
