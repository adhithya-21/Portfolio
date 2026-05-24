function SectionTitle({ title, description }) {
  return (
    <div className="section-header">
      <h1 className="section-title">{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default SectionTitle;
