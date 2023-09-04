import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar bg-body-primary">
      <div className="container-fluid myNav">
        <a className="navbar-brand" href="#">
          <img src="src/assets/images/proj-icon.png" alt="Logo" width="70" className="d-inline-block align-text-center" />
          Projects
        </a>
        <a className="navbar-brand" href="#">
          <img src="src/assets/images/github.png" alt="Logo" width="70" className="d-inline-block align-text-center" />
          GitHub
        </a>
        <a className="navbar-brand" href="#">
          <img src="src/assets/images/linkedin.png" alt="Logo" width="70" className="d-inline-block align-text-center" />
          LinkedIn
        </a>
      </div>
    </nav>

  )
}