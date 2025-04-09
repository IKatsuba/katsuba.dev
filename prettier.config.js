/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.md(x)?',
      options: {
        printWidth: 100,
        proseWrap: 'always',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
};
