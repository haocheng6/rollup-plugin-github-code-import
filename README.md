# rollup-plugin-github-code-import

This is a [Rollup][1] plugin that imports code from a GitHub URL in fenced code
blocks, inspired by [docusaurus-theme-github-codeblock][2].

> [!TIP]
> The content of such codeblocks is replaced at build time, so it is recommended
> to use permalinks from GitHub.

## Installation

```sh
npm i -D rollup-plugin-github-code-import
```

## Usage

To use this plugin in a VitePress project, add it to the `vite.plugins` config:

```js
import { githubCodeImport } from 'rollup-plugin-github-code-import';

export default defineConfig({
  vite: {
    plugins: [githubCodeImport],
  },
});
```

To use custom CSS for fenced code blocks that import code from GitHub, add a
custom CSS file to your VitePress project by following [VitePress instructions][3].

For example, the custom CSS used by the [documentation page][4] can be found
[here][5].

## Examples

The output of the following examples can be found at the [documentation page][4].

### Importing an Entire File

To import code from GitHub, simply add `reference` to the opening line of a
fenced code block and add the GitHub URL to the content of the code block.

````markdown
```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts
```
````

### Importing a Range of Lines

The plugin can also import only a range of lines from GitHub.

````markdown
```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```
````

### Importing a Single Line

Specify only one line at the end of the GitHub URL if that is all you want to import.

````markdown
```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L16
```
````

### Line Highlighting

This plugin works with the line highting extension of VitePress.

````markdown
```ts{2} reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```
````

### Line Numbers

This plugin also works with the line number extension of VitePress.

````markdown
```ts:line-numbers=10 reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```
````

### Code Groups

To use this plugin together with the code groups extension of VitePress, the
`reference` property must be at the end of the opening line of code blocks.

````markdown
::: code-group

```ts [index.ts] reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```

```ts [configs.ts] reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/99e6d0592c3ba15dc689474d58c75527914e0671/docs/.vitepress/config.ts#L4-L19
```

```js [test.js]
// This is not imported from GitHub.
console.log("Hello world!");
```

:::
````

[1]: https://github.com/rollup/rollup
[2]: https://github.com/saucelabs/docusaurus-theme-github-codeblock
[3]: https://vitepress.dev/guide/extending-default-theme#customizing-css
[4]: https://haocheng6.github.io/rollup-plugin-github-code-import
[5]: https://github.com/haocheng6/rollup-plugin-github-code-import/blob/main/docs/.vitepress/theme/custom.css
