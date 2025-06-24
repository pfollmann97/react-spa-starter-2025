import * as yup from 'yup';

export const V8N_MESSAGE__REQUIRED = 'Обязательное поле';

// NOTE: ОБЯЗАТЕЛЬНО импортить этот файл до ИМПОРТА (именно ИМПОРТА) App,
//  иначе настройка работать не будет

yup.setLocale({
  mixed: {
    required: V8N_MESSAGE__REQUIRED,
  },
});
