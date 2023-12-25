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

```js{2,16-18} reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/99e6d0592c3ba15dc689474d58c75527914e0671/docs/.vitepress/config.ts
```

To use custom CSS for fenced code blocks that import code from GitHub, add a
custom CSS file to your VitePress project by following [VitePress instructions][1].

This page uses the following CSS:

```css reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/99e6d0592c3ba15dc689474d58c75527914e0671/docs/.vitepress/theme/custom.css
```

## Examples

### Importing an Entire File

To import code from GitHub, simply add `reference` to the opening line of a
fenced code block and add the GitHub URL to the content of the code block.

Input:

````markdown
```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts
```
````

Output:

```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts
```

### Importing a Range of Lines

The plugin can also import only a range of lines from GitHub.

Input:

````markdown
```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```
````

Output:

```ts reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```

### Line Highlighting

This plugin works with the line highting extension of VitePress.

Input:

````markdown
```ts{2} reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```
````

Output:

```ts{2} reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```

### Line Numbers

This plugin also works with the line number extension of VitePress.

Input:

````markdown
```ts:line-numbers=10 reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```
````

Output:

```ts:line-numbers=10 reference
https://github.com/haocheng6/rollup-plugin-github-code-import/blob/d9d8c354f3dcad786aad4c5a7aa154f42f2ba7ff/src/index.ts#L10-L20
```

[1]: https://vitepress.dev/guide/extending-default-theme#customizing-css
