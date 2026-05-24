import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Experience from '../components/Experience/Experience.jsx';
import Blog from '../components/Blog/Blog.jsx';
import Contact from '../components/Contact/Contact.jsx';

function Home({ resumeLink, socialLinks }) {
  return (
    <>
      <Hero />
      <About resumeLink={resumeLink} socialLinks={socialLinks} />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
