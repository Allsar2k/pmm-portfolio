import { formatBytes, formatMonth } from './format';

describe('formatBytes', () => {
  it('uses KB under a megabyte and MB with one decimal above', () => {
    expect(formatBytes(370_574)).toBe('371 KB');
    expect(formatBytes(15_930_031)).toBe('15.9 MB');
    expect(formatBytes(10)).toBe('1 KB');
  });
});

describe('formatMonth', () => {
  it('formats year-month without shifting across time zones', () => {
    expect(formatMonth('2025-06')).toBe('Jun 2025');
    expect(formatMonth('2024-01')).toBe('Jan 2024');
  });
});
