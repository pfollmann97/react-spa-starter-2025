import {axi} from '@shared/api';
import {validateData} from '@shared/utils';
import {User} from '../types';
import {v8nSchemaOfGetUsersResponse} from './backendSchemas';
import {GetUsersResponse} from './backendTypes';
import {mapUserFromBackend} from './dataMappers';

export const getUsers = async (): Promise<User[]> => {
  const resp = await axi.get<GetUsersResponse>('/api/users/');

  validateData(resp.data, v8nSchemaOfGetUsersResponse, 'getUsers');

  return resp.data.data.map(backendUser => mapUserFromBackend(backendUser));
};
