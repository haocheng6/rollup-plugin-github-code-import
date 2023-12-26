import { readFileSync } from 'node:fs';

import { type Plugin } from 'rollup';

export function getFixtureString(fixture: string) {
  return readFileSync(`${__dirname}/fixtures/${fixture}`, 'utf8');
}

/** This plugin is used for testing the output of the githubCodeImport plugin. */
export const testPlugin: Plugin = {
  name: 'rollup-plugin-test',
  transform: {
    handler: (code, id) => {
      if (id.endsWith('.md')) {
        const escapedCode = code.replaceAll('`', '\\`');
        return `// The following string contains the transformed Markdown.
export const transformedMarkdown = \`${escapedCode}\`;`;
      }
    },
  },
};
