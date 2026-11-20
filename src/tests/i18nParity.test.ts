import { describe, expect, it } from 'vitest';
import i18n from '../i18n/config';

describe('English-only locale', () => {
  it('loads English as the only translation resource', () => {
    expect(i18n.language).toBe('en');
    expect(Object.keys(i18n.store.data)).toEqual(['en']);
    expect(document.documentElement.lang).toBe('en');
  });
});
