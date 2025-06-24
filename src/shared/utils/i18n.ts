import isUndefined from 'lodash/isUndefined';

function getNounPluralForm(n: number) {
  const absN = Math.abs(n);

  if (absN % 10 === 1 && absN % 100 !== 11) {
    return 0;
  } else if (
    absN % 10 >= 2 &&
    absN % 10 <= 4 &&
    (absN % 100 < 10 || absN % 100 >= 20)
  ) {
    return 1;
  } else {
    return 2;
  }
}

function getPluralNoun(
  num: number,
  form0: string,
  form1: string,
  form2?: string,
) {
  if (isUndefined(form2)) {
    return num > 1 ? form1 : form0;
  }

  const forms = [form0, form1, form2];
  return forms[getNounPluralForm(num)];
}

function getVerbPluralForm(a: number) {
  if (a > 1_000_000) {
    return 2;
  }

  if (a > 1000 && a < 1_000_000 && a.toString().endsWith('000')) {
    a /= 1000;
  }

  if ((a % 10 === 1 && a % 100 !== 11) || a.toString().endsWith('1000')) {
    return 0;
  } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
    return 1;
  } else {
    return 2;
  }
}

function getPluralVerb(
  num: number,
  form0: string,
  form1: string,
  form2: string,
) {
  const forms = [form0, form1, form2];
  return forms[getVerbPluralForm(num)];
}

export const plural = getPluralNoun;
export const pluralVerb = getPluralVerb;
