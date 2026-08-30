import { getAllArticles } from '@/lib/mdx';
import Link from 'next/link';

export const metadata = {
  title: 'All Articles | RoopSetu',
  description: 'Browse all articles and inspiration on RoopSetu.',
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="max-w-3xl px-4 py-16 mx-auto md:px-6">
      <h1 className="mb-8 text-4xl font-bold font-playfair">All Articles</h1>
      <div className="space-y-8">
        {articles.map((article) => (
          <article key={article.slug} className="flex flex-col space-y-2">
            <Link href={`/articles/${article.slug}`}>
              <h2 className="text-2xl font-bold transition-colors hover:text-primary font-playfair">
                {article.meta.title}
              </h2>
            </Link>
            {article.meta.date && (
              <time className="text-sm text-gray-500">
                {new Date(article.meta.date).toLocaleDateString()}
              </time>
            )}
            {article.meta.description && (
              <p className="text-gray-600">{article.meta.description}</p>
            )}
            <Link
              href={`/articles/${article.slug}`}
              className="text-sm font-semibold tracking-wider uppercase text-primary hover:underline"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
