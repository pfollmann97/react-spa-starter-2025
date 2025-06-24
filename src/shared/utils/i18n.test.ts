import {plural} from './i18n';

it('returns singular form for 1 in Russian', () => {
  expect(plural(1, 'комната', 'комнаты', 'комнат')).toBe('комната');
});

it('returns paucal form for 2, 3, 4 in Russian', () => {
  expect(plural(2, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
  expect(plural(3, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
  expect(plural(4, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
});

it('returns plural form for 5 and above in Russian', () => {
  expect(plural(5, 'комната', 'комнаты', 'комнат')).toBe('комнат');
  expect(plural(11, 'комната', 'комнаты', 'комнат')).toBe('комнат');
  expect(plural(19, 'комната', 'комнаты', 'комнат')).toBe('комнат');
  expect(plural(100, 'комната', 'комнаты', 'комнат')).toBe('комнат');
});

it('returns correct form for numbers ending with 1 but not 11 in Russian', () => {
  expect(plural(21, 'комната', 'комнаты', 'комнат')).toBe('комната');
  expect(plural(101, 'комната', 'комнаты', 'комнат')).toBe('комната');
});

it('returns correct form for numbers ending with 2, 3, 4 but not 12-14 in Russian', () => {
  expect(plural(22, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
  expect(plural(23, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
  expect(plural(24, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
  expect(plural(32, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
});

it('returns plural form for numbers ending with 11-14 in Russian', () => {
  expect(plural(11, 'комната', 'комнаты', 'комнат')).toBe('комнат');
  expect(plural(12, 'комната', 'комнаты', 'комнат')).toBe('комнат');
  expect(plural(13, 'комната', 'комнаты', 'комнат')).toBe('комнат');
  expect(plural(14, 'комната', 'комнаты', 'комнат')).toBe('комнат');
});

it('returns correct form for 0 in Russian', () => {
  expect(plural(0, 'комната', 'комнаты', 'комнат')).toBe('комнат');
});

it('handles negative numbers correctly in Russian', () => {
  expect(plural(-1, 'комната', 'комнаты', 'комнат')).toBe('комната');
  expect(plural(-2, 'комната', 'комнаты', 'комнат')).toBe('комнаты');
  expect(plural(-5, 'комната', 'комнаты', 'комнат')).toBe('комнат');
});
