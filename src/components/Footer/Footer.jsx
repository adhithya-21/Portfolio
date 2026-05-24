import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import './Footer.css'; // Make sure this path matches your setup

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-inner container">
        
        <div className="footer-copyright">
          <p>&copy; {currentYear} Adhithya Jayawardhana. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/adhithya-21" target="_blank" rel="noreferrer" aria-label="GitHub">
            <span className="footer-icon"><FaGithub size={20} /></span>
            <span className="link-text">GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/adhithyajayawardhana" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <span className="footer-icon"><FaLinkedin size={20} /></span>
            <span className="link-text">LinkedIn</span>
          </a>
          
          <a href="https://medium.com/@adhithyajayawardhana2002" target="_blank" rel="noreferrer" aria-label="Medium">
            <span className="footer-icon"><FaMedium size={20} /></span>
            <span className="link-text">Medium</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;