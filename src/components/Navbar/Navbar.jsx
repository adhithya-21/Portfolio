import './Navbar.css';

function Navbar({ theme, onToggleTheme, resumeLink, socialLinks }) {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a className="brand" href="#home" role="img" aria-label="Adhithya Logo">
          <div className="brand-logo-circle"> </div>
           <div> <h1>Adhithya</h1></div>
        </a>
        <div className="nav-actions">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;