import { type Plugin } from 'rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGithubCodeImport from 'remark-github-code-import';
import { remark } from 'remark';

const remarkProcessor = remark()
  .use(remarkFrontmatter)
  .use(remarkGithubCodeImport, { dedentCode: true });

export const githubCodeImport: Plugin = {
  name: 'rollup-plugin-github-code-import',
  transform: {
    order: 'pre',
    handler: async function (code, id) {
      if (id.endsWith('.md')) {
        return String(await remarkProcessor.process(code));
      }
    },
  },
};
