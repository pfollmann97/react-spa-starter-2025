import {FC} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import {
  Pagination as MuiPagination,
  PaginationItem,
  PaginationProps,
} from '@mui/material';

import {
  COLOR__BACK,
  COLOR__GRAY,
  COLOR__LIGHT_BACK,
  COLOR__WARNING,
  COLOR__WHITE,
} from '@/theme/colors';

export const Pagination: FC<PaginationProps> = props => {
  if (!props.count || props.count < 2) {
    return null;
  }

  return (
    <MuiPagination
      variant="outlined"
      shape="rounded"
      sx={{
        alignSelf: 'center',
        '& .MuiPaginationItem-previousNext': {
          backgroundColor: COLOR__WHITE,
          border: `1px solid ${COLOR__BACK}`,
          borderRadius: '8px',
          boxShadow: '0px 2px 4px -1px #0A090B05, 0px 5px 13px -5px #0A090B0D',
        },
        '& .MuiPaginationItem-page': {
          borderRadius: '6px',
          border: 'none',
          fontSize: 16,
          color: COLOR__GRAY,
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          backgroundColor: COLOR__WHITE,
          border: `1px solid ${COLOR__WARNING}`,
          color: COLOR__WARNING,
          fontWeight: 450,
          '&:hover': {
            backgroundColor: COLOR__LIGHT_BACK,
          },
        },
      }}
      renderItem={item => (
        <PaginationItem
          slots={{previous: WestOutlinedIcon, next: EastOutlinedIcon}}
          {...item}
        />
      )}
      {...props}
    />
  );
};
