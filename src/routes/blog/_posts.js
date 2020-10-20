import fs from 'fs';

const all = () => {
    const files = fs.readdirSync("../../posts");
    console.log(files);

    return [];
}

export default all()
  .map((post) => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));