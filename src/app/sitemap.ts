import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vicentegm.dev';
  const languages = ['en', 'es'];
  const routes = ['', '/projects', '/experience', '/blog'];

  const sitemap: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    languages.forEach((lang) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
