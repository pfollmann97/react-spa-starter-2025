import {useMemo} from 'react';
import useDebounce from 'ahooks/es/useDebounce';

interface Params {
  searchString?: string;
}

export const useDebouncedParamsWithSearch = (
  params?: Params,
): Params | undefined => {
  const {searchString} = params ?? {};
  const debouncedSearchString = useDebounce(searchString, {wait: 500});

  return useMemo(() => {
    if (!params) {
      return params;
    }

    return {
      ...params,
      searchString:
        debouncedSearchString && debouncedSearchString.length > 2
          ? debouncedSearchString
          : undefined,
    };
  }, [debouncedSearchString, params]);
};
