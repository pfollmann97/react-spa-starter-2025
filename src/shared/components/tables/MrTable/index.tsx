import {useQueryState} from 'react-router-use-location-state';
import {
  MaterialReactTable,
  MRT_TableOptions,
  useMaterialReactTable,
} from 'material-react-table';
import {MRT_Localization_RU} from 'material-react-table/locales/ru';

import {ClickToSortIcon} from './icons/ClickToSortIcon';
import {SortIcon} from './icons/SortIcon';

import {COLOR__BACK, COLOR__LINE} from '@/theme/colors';
import {tablePaperStyles} from '@/theme/components/table';
import typographyOptions from '@/theme/typography';

const sortIconCommonStyles = {ml: 1} as const;

export const MrTable = <T extends object>(props: MRT_TableOptions<T>) => {
  // The search value is taken from URL.
  // It will take effect only if enableGlobalFilter prop is set to True.
  const [searchText] = useQueryState('search', '');

  const table = useMaterialReactTable({
    enableGlobalFilter: false,
    localization: MRT_Localization_RU,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: true,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableHiding: false,
    enableTopToolbar: false,
    muiTablePaperProps: {
      sx: {
        ...tablePaperStyles,
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        padding: 1.5,
        backgroundColor: COLOR__BACK,
        ...typographyOptions.b1semibold,
        '& .Mui-TableHeadCell-Content-Labels': {
          flexDirection: 'row',
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        padding: 1.5,
        borderBottom: `1px solid ${COLOR__LINE}`,
      },
    },
    icons: {
      SyncAltIcon: () => <ClickToSortIcon sx={sortIconCommonStyles} />,
      ArrowDownwardIcon: ({className}: {className: string}) => {
        return (
          <SortIcon
            sx={sortIconCommonStyles}
            sortOrder={
              className.includes('MuiTableSortLabel-iconDirectionDesc')
                ? 'desc'
                : 'asc'
            }
          />
        );
      },
    },
    ...props,
    // Чтобы TS не ругался, state должен быть передан ПОСЛЕ props.
    // Почему так, пока непонятно.
    state: {
      globalFilter: searchText,
    },
    globalFilterFn: 'contains', // turn off fuzzy matching and use simple contains filter function
  });

  return <MaterialReactTable table={table} />;
};

export const rightAlignmentColumnProps = {
  muiTableHeadCellProps: {
    align: 'right',
  },
  muiTableBodyCellProps: {
    align: 'right',
  },
} as const;

export const centerAlignmentColumnProps = {
  muiTableHeadCellProps: {
    align: 'center',
  },
  muiTableBodyCellProps: {
    align: 'center',
  },
} as const;
