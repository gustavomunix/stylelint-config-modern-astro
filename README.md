# stylelint-config-modern-astro

Shareable stylelint config: [`stylelint-config-modern`](https://www.npmjs.com/package/stylelint-config-modern) hardened for Astro projects. Companion of the [`modern-css-astro`](https://github.com/gustavomunix/modern-css-astro) skill.

## What it adds

- `.astro` coverage: `<style>` blocks (and static `style="…"` attributes) are linted via `postcss-html`; dynamic `style={…}` are not
- `media-feature-range-notation: 'context'` — range syntax enforced for every `min-/max-` prefix (custom properties such as `--max-width` are not reached)
- `declaration-block-no-duplicate-properties` with `consecutive-duplicates-with-different-syntaxes` allowed (`100vh; 100dvh` fallbacks pass)
- `property-no-unknown` — typo protection no other rule gives

Browser support policy and the `@layer`/nesting guidance live in the skill; what the linter can check without false positives is here.

## Install

```bash
pnpm add -D stylelint-config-modern-astro
# pinned to a commit, without npm:
pnpm add -D github:gustavomunix/stylelint-config-modern-astro#af1158c
```

`stylelint-config-modern` and `postcss-html` are declared as dependencies of this package — no direct install needed (verified under pnpm's strict `node_modules`).

## Use

```js
// stylelint.config.js
export default {
  extends: ['stylelint-config-modern-astro'],
  // project-specific glue stays here:
  ignoreFiles: ['dist/**', '.astro/**', 'node_modules/**', 'src/styles/vendor/**'],
};
```

Guard the parser: a control fixture with known violations must keep failing the run, so a `postcss-html` upgrade that silently skips `<style>` blocks fails instead of staying green. Wire it as a script asserting the expected violation count.

Verified on stylelint 18.0.0 + stylelint-config-modern 2.0.1 + postcss-html 2.0.1 + Astro 7.4.
