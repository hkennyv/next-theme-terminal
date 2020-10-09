import matter from "gray-matter";

export function parseMarkdownFile() {}

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

/*
 * inputs a webpack.context object of markdown files and returns an array of
 * slugs, generated from the keys
 *
 * i.e. "myblogpost.md" => "myblogpost"
 */
export function getMarkdownSlugs(context) {
  const keys = context.keys();

  const data = keys.map((key, idx) => {
    const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    return slug;
  });

  return data;
}

export function getMarkdownTags(context) {
  const keys = context.keys();
  const values = keys.map(context);

  const tagSet = new Set();

  // get the tags from all the files
  keys.map((key, idx) => {
    const value = values[idx];
    const document = matter(value.default);
    const { tags } = document.data;

    if (tags) {
      for (let tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  return Array.from(tagSet);
}
