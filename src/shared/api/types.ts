import {UseQueryOptions} from '@tanstack/react-query';

export interface GetListParams {
  page?: number;
  pageSize?: number;
}

export interface GetListOutput<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export type QueryOptionsForList<T extends object, SelectedData> = Partial<
  UseQueryOptions<GetListOutput<T>, Error, SelectedData>
>;

export type QueryOptionsForOne<T extends object, SelectedData> = Partial<
  UseQueryOptions<T, Error, SelectedData>
>;
