import {User} from '../types';
import {UserOnBackend} from './backendTypes';

export const mapUserFromBackend = ({
  id,
  avatar,
  email,
  first_name,
  last_name,
}: UserOnBackend): User => ({
  id,
  email,
  firstName: first_name ?? '',
  lastName: last_name,
  photoUrl: avatar ?? '',
});
