import type { MetadataRoute } from 'next';
import glob from 'fast-glob';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  });

  return articleFilenames.map((filename) => {
    return {
      url: `https://katsuba.dev/articles/${filename.replace('/page.mdx', '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });
}
