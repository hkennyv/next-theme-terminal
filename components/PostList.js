import PostHead from "@components/PostHead";

export default function PostList({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <div className="post on-list">
          <PostHead key={idx} post={post} onList={true} />
        </div>
      ))}
    </div>
  );
}
