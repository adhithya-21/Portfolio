function Button({ children, href, onClick, type = 'button', variant = 'primary' }) {
  const classes = variant === 'primary' ? 'btn-primary' : 'secondary-link';
  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
