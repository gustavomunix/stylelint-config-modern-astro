export default {
  extends: ['stylelint-config-modern'],
  rules: {
    'media-feature-range-notation': 'context',
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-syntaxes'] },
    ],
    'property-no-unknown': true,
  },
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
};
