import {FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  DialogTitle as MuiDialogTitle,
  IconButton,
  Typography,
  TypographyTypeMap,
} from '@mui/material';
import {DialogTitleProps} from '@mui/material/DialogTitle/DialogTitle';

interface Props extends Omit<DialogTitleProps, 'children'> {
  title: string;
  titleVariant?: TypographyTypeMap['props']['variant'];
  onClose?: () => void; // if specified, the close button is displayed
}

export const DialogTitle: FC<Props> = ({
  titleVariant = 'h1',
  title,
  onClose,
  ...restProps
}) => {
  return (
    <MuiDialogTitle
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      {...restProps}
    >
      <Typography variant={titleVariant}>{title}</Typography>

      {onClose && (
        <IconButton size="small" aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};
