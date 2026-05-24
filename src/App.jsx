import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import { socialLinks, resumeLink } from './utils/constants.js';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    setTheme(stored === 'dark' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="app-container">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        resumeLink={resumeLink}
        socialLinks={socialLinks}
      />
      <main>
        <Home resumeLink={resumeLink} socialLinks={socialLinks} />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;
