import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

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
            <Link
              className={`nav-link ${router.pathname === "/" ? "active" : ""}`}
              href="/"
            >
              <i className="fas fa-home" id="link"></i>
              <span id="link-name">Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${
                router.pathname === "/stacks" ? "active" : ""
              }`}
              href="/stacks"
            >
              <i className="fas fa-server" id="link"></i>
              <span id="link-name">Stacks</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${
                router.pathname === "/projects" ? "active" : ""
              }`}
              href="/projects"
            >
              <i className="fas fa-code" id="link"></i>
              <span id="link-name">Projects</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${
                router.pathname === "/contact" ? "active" : ""
              }`}
              href="/contact"
            >
              <i className="fas fa-address-book" id="link"></i>
              <span id="link-name">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
