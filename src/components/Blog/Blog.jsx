import './Blog.css';
import SectionTitle from '../Common/SectionTitle.jsx';
import { blogs } from '../../data/blogs.js';

function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        {/* Fixed nested h1 tags here */}
        <h1 className="section-title">Blogs</h1>
        <h2>A collection of my technical blog posts and insights.</h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <a key={blog.title} className="blog-card card" href={blog.link} target="_blank" rel="noreferrer">
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <span className="blog-link">🔗 Read article </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;