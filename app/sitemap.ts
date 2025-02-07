import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.HOST}/`,
      lastModified: new Date(),
      priority: 1.0,
      alternates: {
        languages: {
          ar: `${process.env.HOST}/ar/`,
          en: `${process.env.HOST}/en/`,
        },
      },
    },
  ];
}
