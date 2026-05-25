import './Skills.css';
import { skills } from '../../data/skills.js';
import { Layout, Server, Wrench } from 'lucide-react';

// Import brand icons from react-icons/si (Broken icons removed)
import { 
  SiReact, SiJavascript, SiTailwindcss, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiPython, SiJsonwebtokens, 
  SiVite, SiFigma, SiGithub
} from 'react-icons/si';

// Added Font Awesome fallbacks for HTML5, CSS3, and PowerBI
import { FaGitAlt, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaChartBar } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

// Helper function for the category headers
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Frontend': return <Layout className="category-icon" />;
    case 'Backend': return <Server className="category-icon" />;
    case 'Tools': return <Wrench className="category-icon" />;
    default: return null;
  }
};

// Map each specific skill to a brand icon
const getSkillIcon = (skillName) => {
  const iconProps = { className: "skill-icon" }; 
  
  switch (skillName) {
    case 'React': return <SiReact {...iconProps} color="#61DAFB" />;
    case 'JavaScript': return <SiJavascript {...iconProps} color="#F7DF1E" />;
    
    // Using Safe FontAwesome Icons
    case 'HTML5': return <FaHtml5 {...iconProps} color="#E34F26" />;
    case 'CSS3': return <FaCss3Alt {...iconProps} color="#1572B6" />;
    case 'Power BI': return <FaChartBar {...iconProps} color="#F2C811" />;
    
    case 'Tailwind CSS': return <SiTailwindcss {...iconProps} color="#06B6D4" />;
    case 'Next.js': return <SiNextdotjs {...iconProps} />;
    case 'Git': return <FaGitAlt {...iconProps} color="#F05032" />;
    case 'REST API': return <FaCode {...iconProps} color="#858585" />;
    case 'Node.js': return <SiNodedotjs {...iconProps} color="#339933" />;
    case 'Express': return <SiExpress {...iconProps} />;
    case 'MongoDB': return <SiMongodb {...iconProps} color="#47A248" />;
    case 'SQL': return <FaDatabase {...iconProps} color="#4479A1" />;
    case 'Python': return <SiPython {...iconProps} color="#3776AB" />;
    case 'JWT': return <SiJsonwebtokens {...iconProps} color="#000000" />;
    case 'Vite': return <SiVite {...iconProps} color="#646CFF" />;
    case 'Figma': return <SiFigma {...iconProps} color="#F24E1E" />;
    case 'GitHub': return <SiGithub {...iconProps} />;
    case 'VS Code': return <VscVscode {...iconProps} color="#007ACC" />;
    default: return null;
  }
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h1 className="section-title"><h1>Skills</h1></h1>
        <h2>Technical skills for creating modern web applications and interactive data visualizations.</h2>
        
        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-card card" key={group.category}>
              
              <div className="card-header">
                {getCategoryIcon(group.category)}
                <h3>{group.category}</h3>
              </div>

              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;