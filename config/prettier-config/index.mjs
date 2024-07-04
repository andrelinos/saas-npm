/** @typedef {import('prettier').Config} PrettierConfig */

/** @type { PrettierConfig } */

const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  bracketSameLine: false,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss']
}

export default config
