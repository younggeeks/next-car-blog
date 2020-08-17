import { createClient, ContentfulClientApi } from "contentful";

const client: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const formatArticle = (fields) => ({
  title: fields.title,
  author: {
    name: fields.author.fields.name,
    picture: fields.author.fields.picture.fields.file.url,
  },
  date: fields.date,
  make: fields.make,
  image: fields.image.fields.file.url,
  body: fields.body,
});

export async function getAllArticles() {
  const articles = await (
    await client.getEntries({
      content_type: "carPost",
    })
  ).items;

  return articles.map((article) => formatArticle(article.fields));
}
