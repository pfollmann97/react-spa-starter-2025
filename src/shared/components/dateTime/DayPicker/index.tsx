import {FC} from 'react';
import {DayPicker as OriginalDayPicker, DayPickerProps} from 'react-day-picker';
import {ru} from 'react-day-picker/locale';

import 'react-day-picker/style.css';
import styles from './styles.module.scss';
// import classNames from 'react-day-picker/style.module.css'; // Output the class names as parsed by CSS modules.

// console.log(classNames);

export const DayPicker: FC<DayPickerProps> = props => {
  return (
    <OriginalDayPicker
      animate
      locale={ru}
      showOutsideDays
      classNames={{
        day: styles.day,
        selected: props.mode === 'range' ? undefined : styles.selected,
        outside: styles.outside,
        weekday: styles.weekday,
      }}
      {...props}
    />
  );
};
