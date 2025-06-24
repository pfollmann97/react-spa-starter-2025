import {AnySchema, number, string} from 'yup';

import {isProduction} from '../constants';
import {V8N_MESSAGE__REQUIRED} from '../setup/yupV8nMessages';
import {stringify} from './debug';

export const objectOf = <T extends AnySchema>(schema: T) => ({
  name: 'objectOf',
  exclusive: false,
  message: "Object values don't match the given schema",
  test: (value: Record<string, unknown>) => {
    return Object.entries(value).every(([itemKey, itemValue]) => {
      const isValid = schema.isValidSync(itemValue);

      if (!isValid && !isProduction) {
        console.log(`objectOf, invalid value for key "${itemKey}"`);
        console.log(`object: ${stringify(value)}`);
        console.log(`key value: ${stringify(itemValue)}`);
      }

      return isValid;
    });
  },
});

export const validateData = (
  data: unknown,
  schema: AnySchema,
  dataDescription?: string,
): void => {
  if (isProduction) {
    return;
  }

  try {
    schema.validateSync(data, {
      // when true, parsing is skipped and the input is validated "as-is"
      strict: true,
      // Collect all errors instead of stopping at first failure
      abortEarly: false,
    });
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const errorMessages = (e.errors as string[]).join('\n');

    console.log(`invalid data ${dataDescription || ''}`);
    console.error(errorMessages);
    throw e;
  }
};

export const stringDefinedButCanBeEmpty = string().defined().strict(true);
export const stringOptionalNullable = string().optional().nullable();

export const numberOptionalNullable = number().optional().nullable();
export const numberRequiredNullable = number()
  .nullable()
  .notOneOf([null], V8N_MESSAGE__REQUIRED);
