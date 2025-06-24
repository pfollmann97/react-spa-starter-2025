import {number, object} from 'yup';

export const paginationV8nSchema = object().shape({
  page: number().integer().required(),
  per_page: number().integer().required(),
  total: number().required(),
  total_pages: number().integer().required(),
});
