import {getNameInitials, limitString} from './strings';

describe('limitString', () => {
  it('returns the original string if its length is less than or equal to maxLength', () => {
    expect(limitString('hello', 5)).toBe('hello');
    expect(limitString('hi', 10)).toBe('hi');
  });

  it('returns an empty string if input is empty', () => {
    expect(limitString('', 5)).toBe('');
  });

  it('truncates and adds ellipsis at the end if string is longer than maxLength', () => {
    expect(limitString('abcdefghij', 7)).toBe('abcd...');
    expect(limitString('abcdefghij', 3)).toBe('...');
    expect(limitString('abcdefghij', 4)).toBe('a...');
  });

  it('truncates and adds ellipsis at the start if fromEnd is true', () => {
    expect(limitString('abcdefghij', 5, 1)).toBe('...ij');
    expect(limitString('abcdefghij', 3, 1)).toBe('...');
  });

  it('handles maxLength less than or equal to 3', () => {
    expect(limitString('abcdef', 2)).toBe('...');
    expect(limitString('abcdef', 3)).toBe('...');
  });

  it('handles fromEnd with maxLength greater than string length', () => {
    expect(limitString('abc', 10, 1)).toBe('abc');
  });

  it('handles undefined fromEnd as false', () => {
    expect(limitString('abcdefghij', 6)).toBe('abc...');
  });
});

describe('getNameInitials', () => {
  test('empty string => empty string', () => {
    expect(getNameInitials('')).toEqual('');
  });

  test('ФИ', () => {
    expect(getNameInitials('Захаров Алексей')).toEqual('ЗА');
  });

  test('ФИО', () => {
    expect(getNameInitials('Захаров Алексей Валерьевич')).toEqual('ЗА');
  });

  test('Ф', () => {
    expect(getNameInitials('Захаров')).toEqual('З');
  });

  test('ИОЗ', () => {
    expect(getNameInitials('Алексей Валерьевич Захаров')).toEqual('АВ');
  });

  test('ИЗ', () => {
    expect(getNameInitials('Алексей Захаров')).toEqual('АЗ');
  });
});
