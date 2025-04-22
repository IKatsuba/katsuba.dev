import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import glob from 'fast-glob';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
  async redirects() {
    const articleFilenames = await glob('*/page.mdx', {
      cwd: './src/app/articles',
    });

    const redirects = articleFilenames.map((filename) => {
      return {
        source: `/${filename.replace('/page.mdx', '')}`,
        destination: `/articles/${filename.replace('/page.mdx', '')}`,
        permanent: true,
      };
    });

    console.log(redirects);

    return [
      ...redirects,
      {
        source: '/micro-frontend-architecture-part-3-layered-architecture',
        destination: '/articles/micro-frontend-architecture-part-3',
        permanent: true,
      },
      {
        source: '/micro-frontend-architechture-part-1',
        destination: '/articles/micro-frontend-architecture-part-1',
        permanent: true,
      },
      {
        source: '/micro-frontend-architechture-part-2',
        destination: '/articles/micro-frontend-architecture-part-2',
        permanent: true,
      },
      {
        source: '/micro-frontend-architechture',
        destination: '/articles/micro-frontend-architecture',
        permanent: true,
      },
      {
        source: '/3-steps-to-understanding-angular-baac54755022',
        destination: '/articles/3-steps-to-understanding-angular',
        permanent: true,
      },
      {
        source: '/the-removal-of-angular-compatibility-compiler-ngcc-in-angular-16-83e685552ab3',
        destination: '/articles/the-removal-of-angular-compatibility-compiler-ngcc-in-angular-16',
        permanent: true,
      },
      {
        source: '/mutate-a-code-like-a-boss-with-angular-schematics-ec3415712d5',
        destination: '/articles/mutate-a-code-like-a-boss-with-angular-schematics',
        permanent: true,
      },
      {
        source: '/angular-universal-real-app-problems-b008b80396b4',
        destination: '/articles/angular-universal-real-app-problems',
        permanent: true,
      },
      {
        source: '/rxnode-reactive-nodejs-api-f32c8e02e295',
        destination: '/articles/rxnode-reactive-nodejs-api',
        permanent: true,
      },
      {
        source: '/10-javascript-array-methods-i-need-8dac4513d716',
        destination: '/articles/10-javascript-array-methods-i-need',
        permanent: true,
      },
      {
        source:
          '/features-of-angular-di-about-which-almost-nothing-is-said-in-the-documentation-45ef8485742a',
        destination:
          '/articles/features-of-angular-di-about-which-almost-nothing-is-said-in-the-documentation',
        permanent: true,
      },
      {
        source: '/once-again-about-angular-cli-builders-b6be0f402f3e',
        destination: '/articles/once-again-about-angular-cli-builders',
        permanent: true,
      },
      {
        source: '/whats-new-in-npm-7-915794af4773',
        destination: '/articles/whats-new-in-npm-7',
        permanent: true,
      },
      {
        source: '/author/:author*',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
