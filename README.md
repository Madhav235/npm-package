# world-languages-recreated

A lightweight, offline list of localized language names for Node.js. The package
exports a plain array of strings and supports both CommonJS and ES module
consumers.

The API shape and display-name set were checked against `languages-list@1.0.2`,
whose README shows `require('languages-list')` returning the dataset. This
package is an independent implementation; it does not copy the original
package's source code. A few leading or trailing whitespace errors in the
upstream display names are normalized.

## Features

- More than 100 localized language display names
- One array of strings; no objects, codes, or hidden lookup behavior
- CommonJS and ES module entry points
- Bundled JSON dataset; no network access or runtime dependencies

## Installation

```sh
npm install world-languages-recreated
```

## CommonJS

```js
const languages = require('world-languages-recreated');

console.log(languages);
```

## ES modules

```js
import languages from 'world-languages-recreated';

console.log(languages);
```

## Example output

The array begins with names such as:

```text
[
  'Afrikaans',
  'Azərbaycan dili (Latın)',
  'Bahasa Indonesia',
  'Bahasa Melayu',
  'Bosanski (Latinica)',
  ...
]
```

It includes regional/script display variants such as `English (United States)`,
`Português (Brasil)`, and `日本語`. These are localized display labels, not a
claim to enumerate every spoken language, dialect, or ISO language code.

## Dataset structure

The default export itself is an array of unique, non-empty strings:

```js
[
  'Afrikaans',
  'Azərbaycan dili (Latın)',
  'English (United States)',
  // ...
]
```

The original package exports this array directly; consumers should treat each
element as a display name rather than expecting an object with additional
fields.

## Examples and tests

Run either example from the package directory:

```sh
node examples/example.cjs
node examples/example.js
```

Run the test suite:

```sh
npm test
```

## License

MIT. The language-name dataset was adapted from the MIT-licensed
[`languages-list`](https://github.com/mock-end/languages-list) v1.0.2 project;
see [LICENSE](./LICENSE).
# npm-package
