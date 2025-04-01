import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import glob from 'fast-glob'

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
    })

    const redirects = articleFilenames.map((filename) => {
      return {
        source: `/${filename.replace('/page.mdx', '')}`,
        destination: `/articles/${filename.replace('/page.mdx', '')}`,
        permanent: true,
      }
    })

    console.log(redirects)

    return [
      ...redirects,
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
