import {InferType} from 'yup';

import {v8nSchemaOfGetUserResponse} from './backendSchemas';

export type GetUserResponse = InferType<typeof v8nSchemaOfGetUserResponse>;
