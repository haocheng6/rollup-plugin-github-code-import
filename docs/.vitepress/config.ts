import { defineConfig } from 'vitepress';
import { githubCodeImport } from 'rollup-plugin-github-code-import';

export default defineConfig({
  title: 'rollup-plugin-github-code-import',
  description: 'Rollup plugin that imports code from a GitHub URL.',
  base: '/rollup-plugin-github-code-import/',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/haocheng6/rollup-plugin-github-code-import',
      },
    ],
  },
  vite: {
    plugins: [githubCodeImport],
  },
});
