import {array, number, object, string} from 'yup';

import {paginationV8nSchema} from '@shared/api';

export const userV8nSchema = object().shape({
  id: number().required(),
  email: string().required(),
  first_name: string(),
  last_name: string().required(),
  avatar: string(),
});

export const v8nSchemaOfGetUsersResponse = paginationV8nSchema.shape({
  data: array().of(userV8nSchema).required(),
});
