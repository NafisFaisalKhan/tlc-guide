/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://tlcguide.org',
    generateRobotsTxt: true, // (optional)
    // ...other options
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        },
      ],
      additionalSitemaps: [
        'https://tlcguide.org/sitemap.xml',
      ],
    },
    exclude: ['/404', '/500', '/admin/*', '/api/*'],
    additionalPaths: async (config) => [
      await config.transform(config, '/tlc-license-guide'),
      await config.transform(config, '/tlc-license-cost'),
      await config.transform(config, '/tlc-license-requirements'),
      await config.transform(config, '/tlc-license-renewal'),
      await config.transform(config, '/uber-tlc-license'),
      await config.transform(config, '/lyft-tlc-license'),
      await config.transform(config, '/tlc-license-classes'),
      await config.transform(config, '/tlc-license-exam'),
    ],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: true,
  }