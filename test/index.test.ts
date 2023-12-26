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
});
