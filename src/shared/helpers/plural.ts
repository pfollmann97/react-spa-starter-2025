import {plural} from '../utils';

export const getPluralNHours = (hours: number) =>
  `${hours} ${plural(hours, 'час', 'часа', 'часов')}`;
