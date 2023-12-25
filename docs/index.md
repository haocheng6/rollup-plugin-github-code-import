---
title: Documentation
outline: deep
---

# rollup-plugin-github-code-import

This plugin imports code from a GitHub URL in fenced code blocks.

::: tip
The content of such codeblocks is replaced at build time, so it is recommended
to use permalinks from GitHub.
:::

## Installation

```sh
npm i -D rollup-plugin-github-code-import
```

## Usage

To use this plugin in a VitePress project, add it to the `vite.plugins` config:

```js{6-8}
import { githubCodeImport } from 'rollup-plugin-github-code-import';

export default defineConfig({
  title: 'vite-github-codeblock-plugin',
  description: 'Vite plugin that imports code from a GitHub URL in fenced code blocks.',
  vite: {
    plugins: [githubCodeImport],
  },
});
```

To use custom CSS for fenced code blocks that import code from GitHub, add a
custom CSS file to your VitePress project by following [VitePress instructions][1].

This page uses the following CSS:

```css
.imported-github-code {
  display: flow-root;
  margin-top: 16px;
}

.imported-github-code > div:first-child {
  margin-top: 0;
  margin-bottom: 4px;
}

.github-code-link {
  float: right;
  font-size: 0.875rem;
}

.github-code-link > a::after {
  content: '';
}
```

## Examples

### Importing an Entire File

To import code from GitHub, simply add `reference` to the opening line of a
fenced code block and add the GitHub URL to the content of the code block.

Input:

````markdown
```ts reference
https://github.com/lodash/lodash/blob/aa18212085c52fc106d075319637b8729e0f179f/src/add.ts
```
````

Output:

```ts reference
https://github.com/lodash/lodash/blob/aa18212085c52fc106d075319637b8729e0f179f/src/add.ts
```

### Importing a Range of Lines

The plugin can also import only a range of lines from GitHub.

Input:

````markdown
```js reference
https://github.com/mdn/content/blob/83f3bb0c0663edf3c4f86da8a07d8ac0a75b5ccb/scripts/front-matter_utils.js#L68-L80
```
````

Output:

```js reference
https://github.com/mdn/content/blob/83f3bb0c0663edf3c4f86da8a07d8ac0a75b5ccb/scripts/front-matter_utils.js#L68-L80
```

### Line Highlighting

This plugin works with the line highting extension of VitePress.

Input:

````markdown
```js{3} reference
https://github.com/mdn/content/blob/83f3bb0c0663edf3c4f86da8a07d8ac0a75b5ccb/scripts/front-matter_utils.js#L68-L80
```
````

Output:

```js{3} reference
https://github.com/mdn/content/blob/83f3bb0c0663edf3c4f86da8a07d8ac0a75b5ccb/scripts/front-matter_utils.js#L68-L80
```

### Line Numbers

This plugin also works with the line number extension of VitePress.

Input:

````markdown
```js:line-numbers=68 reference
https://github.com/mdn/content/blob/83f3bb0c0663edf3c4f86da8a07d8ac0a75b5ccb/scripts/front-matter_utils.js#L68-L80
```
````

Output:

```js:line-numbers=68 reference
https://github.com/mdn/content/blob/83f3bb0c0663edf3c4f86da8a07d8ac0a75b5ccb/scripts/front-matter_utils.js#L68-L80
```

[1]: https://vitepress.dev/guide/extending-default-theme#customizing-css
