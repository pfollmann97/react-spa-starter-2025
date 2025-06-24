import {object} from 'yup';

import {userV8nSchema} from '@entities/user/api/backendSchemas';

export const v8nSchemaOfGetUserResponse = object().shape({
  data: userV8nSchema.required(),
});
