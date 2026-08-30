import { MetadataRoute } from 'next';
import { getArticleSlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roopsetu.com';

  const articles = getArticleSlugs().map((slug) => ({
    url: `${baseUrl}/articles/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    '',
    '/nails',
    '/hairstyles',
    '/makeup',
    '/articles',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...staticPages, ...articles];
}
