// IMPORTANT!
// Need to duplicate any changes for the i18n scanner
export const supportedLanguages = [
  {
    code: 'en-us',
    label: 'ENG',
    icon: 'en',
  },
  {
    code: 'pt-br',
    label: 'BRA',
    icon: 'br',
  },
];

export const getLangLabelByCode = (code: string) => {
  if (!code) {
    return '';
  }

  const lang = supportedLanguages.find(lng => lng.code === code);
  if (!lang) {
    return '';
  }

  return lang.label;
};

export const isLangSupported = (langCode: string) => {
  if (!langCode) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return supportedLanguages.some(({code}) => code === langCode.toLowerCase());
};
