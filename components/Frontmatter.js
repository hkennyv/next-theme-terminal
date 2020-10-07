import Link from "next/link";

export default function Frontmatter({ post, root }) {
  const { frontmatter, slug } = post;
  const { author, cover, date, description, tags, title } = frontmatter;

  return (
    <>
      <h1 className="post-title">
        <Link href={`${root}/${slug}`}>
          <a>{title}</a>
        </Link>
      </h1>
      <div className="post-meta">
        <span className="post-date">{date}</span>
        <span className="post-author"> :: {author}</span>
      </div>
      <span className="post-tags">
        {tags &&
          tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`}>
              <a>#{tag}</a>
            </Link>
          ))}
      </span>
      {cover && <img src={cover} className="post-cover" alt={title} />}
      <div className="post-content">{description}</div>
    </>
  );
}
