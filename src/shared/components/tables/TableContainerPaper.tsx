import {Paper, PaperProps, styled} from '@mui/material';

import {tablePaperStyles} from '@/theme/components/table';

export const TableContainerPaper = styled(Paper)<PaperProps>(
  () => tablePaperStyles,
);
