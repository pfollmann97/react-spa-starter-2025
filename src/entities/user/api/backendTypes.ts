import {InferType} from 'yup';

import {userV8nSchema, v8nSchemaOfGetUsersResponse} from './backendSchemas';

export type UserOnBackend = InferType<typeof userV8nSchema>;
export type GetUsersResponse = InferType<typeof v8nSchemaOfGetUsersResponse>;
