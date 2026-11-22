import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

const require = createRequire(import.meta.url);

test('the package can be imported with CommonJS and ES modules', async () => {
  const commonJsLanguages = require('world-languages-recreated');
  const { default: esmLanguages } = await import('world-languages-recreated');

  assert.ok(Array.isArray(commonJsLanguages));
  assert.deepEqual(esmLanguages, commonJsLanguages);
});

test('exports a non-empty array of unique, trimmed language names', () => {
  const languages = require('world-languages-recreated');

  assert.ok(languages.length > 100);
  assert.ok(languages.every((language) => typeof language === 'string'));
  assert.ok(languages.every((language) => language.length > 0 && language.trim() === language));
  assert.equal(new Set(languages).size, languages.length);
});

test('includes localized names and region-specific display variants', () => {
  const languages = require('world-languages-recreated');

  assert.ok(languages.includes('English (United States)'));
  assert.ok(languages.includes('Português (Brasil)'));
  assert.ok(languages.includes('日本語'));
});
