import {User} from '@entities/user';
import {mapUserFromBackend} from '@entities/user/api/dataMappers';
import {axi} from '@shared/api';
import {validateData} from '@shared/utils';
import {v8nSchemaOfGetUserResponse} from './backendSchemas';
import {GetUserResponse} from './backendTypes';

// Returns auth token
export const login = async (
  email: string,
  password: string,
): Promise<string> => {
  const resp = await axi.post<string>('/api/login', {
    email,
    password,
  });

  return resp.data;
};

export const getCurrentUser = async (): Promise<User> => {
  const resp = await axi.get<GetUserResponse>('/api/users/10');

  validateData(resp.data, v8nSchemaOfGetUserResponse, 'getCurrentUser');

  return mapUserFromBackend(resp.data.data);
};
