import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const languages = require('./languages.json');

export default languages;
