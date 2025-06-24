export const limitString = (
  str: string,
  maxLength: number,
  fromEnd?: number,
): string => {
  if (!str) {
    return '';
  }

  if (str.length <= maxLength) {
    return str;
  }

  if (fromEnd) {
    return `...${str.slice(str.length - maxLength + 3)}`;
  }

  return `${str.slice(0, Math.max(0, maxLength - 3))}...`;
};

export const compareStringsIgnoringCase = (
  str1: string,
  str2: string,
): boolean => str1.toLowerCase() === str2.toLowerCase();

export const getNameInitials = (name: string): string => {
  if (!name) {
    return '';
  }

  const trimmedName = name.trim();

  const parts = trimmedName.split(' ');
  let initials = '';

  initials =
    parts.length === 1
      ? parts[0]!.charAt(0)
      : parts[0]!.charAt(0) + parts[1]!.charAt(0);

  return initials.toUpperCase();
};
