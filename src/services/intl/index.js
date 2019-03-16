import { find, mapObjIndexed } from 'ramda';
import { dot } from 'dot-object';

import en from './translations/en.json';
import pt from './translations/pt.json';

const languages = { en, pt };

export const locale = find(
  key => Object.keys(languages).includes(key),
  [
    navigator.language,
    navigator.language.slice(0, 2),
  ],
) || Object.keys(languages)[0];

export const messages = mapObjIndexed(language => dot(language), languages);
