export default function PostHead({ post }) {
  return (
    <div className="post on-list">
      <h1 className="post-title">
        <a href={post.url}>{post.title}</a>
      </h1>
      <div className="post-meta">
        <span className="post-date">{post.date}</span>
        <span className="post-author">:: {post.author}</span>
      </div>
      {post.cover && (
        <img src={post.cover} className="post-cover" alt={post.title} />
      )}
      <div className="post-content">{post.description}</div>
    </div>
  );
}
