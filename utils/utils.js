import matter from "gray-matter";

/*
 * inputs a webpack.context object of markdown files and returns an array of
 * objects, each containing the frontmatter, markdownBody, and slug for the
 * corresponding markdown file
 */
export function parseMarkdownFiles(context) {
  // keys are the name(s) of the files and values are the contents of the file
  const keys = context.keys();
  const values = keys.map(context);

  // construct slug from the filename (key)
  // pass the file contents through matter to parse frontmatter and markdownBody
  const data = keys.map((key, idx) => {
    const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    const value = values[idx];
    const document = matter(value.default);

    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
  });

  return data;
}
