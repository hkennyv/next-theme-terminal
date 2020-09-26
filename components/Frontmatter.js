export default function Frontmatter({ post }) {
  const { frontmatter } = post;
  const { author, cover, date, description, title } = frontmatter;

  return (
    <>
      <h1 className="post-title">
        <a href={post.url}>{title}</a>
      </h1>
      <div className="post-meta">
        <span className="post-date">{date}</span>
        <span className="post-author">:: {author}</span>
      </div>
      {cover && <img src={cover} className="post-cover" alt={title} />}
      <div className="post-content">{description}</div>
    </>
  );
}
