import { rollup } from 'rollup';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { githubCodeImport } from '../src/index.js';

import { getFixtureString, testPlugin } from './helpers.js';

describe('githubCodeImport', () => {
  const mockCode = getFixtureString('input/example.js');

  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(async () => {
      return {
        text: async () => mockCode,
        ok: true,
      } as Response;
    });
  });

  it('transforms markdown file with a reference code block that imports an entire file', async () => {
    const bundle = await rollup({
      input: `${__dirname}/fixtures/input/entire_file.md`,
      plugins: [githubCodeImport, testPlugin],
    });
    const { output } = await bundle.generate({ format: 'es' });

    expect(output[0].code).toMatchFileSnapshot(
      './fixtures/output/entire_file.js',
    );

    bundle.close();
  });

  it('transforms markdown file with a reference code block that imports a range of lines', async () => {
    const bundle = await rollup({
      input: `${__dirname}/fixtures/input/line_range.md`,
      plugins: [githubCodeImport, testPlugin],
    });
    const { output } = await bundle.generate({ format: 'es' });

    expect(output[0].code).toMatchFileSnapshot(
      './fixtures/output/line_range.js',
    );

    bundle.close();
  });

  it('transforms markdown file with a reference code block that imports a single line', async () => {
    const bundle = await rollup({
      input: `${__dirname}/fixtures/input/single_line.md`,
      plugins: [githubCodeImport, testPlugin],
    });
    const { output } = await bundle.generate({ format: 'es' });

    expect(output[0].code).toMatchFileSnapshot(
      './fixtures/output/single_line.js',
    );

    bundle.close();
  });

  it('throws an error if the reference code block does not contain a URL', async () => {
    await expect(() =>
      rollup({
        input: `${__dirname}/fixtures/input/no_url.md`,
        plugins: [githubCodeImport, testPlugin],
      }),
    ).rejects.toThrowError(
      '[no_url.md:3:1-4:4] No URL found in the code block.',
    );
  });

  it('throws an error if the fetch call failed', async () => {
    vi.spyOn(global, 'fetch').mockImplementation(async () => {
      return { text: async () => '404: Not Found', ok: false } as Response;
    });

    await expect(() =>
      rollup({
        input: `${__dirname}/fixtures/input/entire_file.md`,
        plugins: [githubCodeImport],
      }),
    ).rejects.toThrowError(
      '[entire_file.md:3:1-5:4] Failed to import code from https://github.com/user/repo/blob/branch/folder/example.js: Failed to fetch code: 404: Not Found',
    );
  });
});
