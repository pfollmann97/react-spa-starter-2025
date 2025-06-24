import {cloneElement, FC, MouseEvent, ReactElement, useState} from 'react';
import {Popover} from '@mui/material';

type ClosePopoverFunc = () => void;

interface Props {
  buttonElement: ReactElement;
  renderPopoverContent: (closePopover: ClosePopoverFunc) => ReactElement;
  expandHorizontalDirection?: 'right' | 'left';
}

export const ButtonWithPopover: FC<Props> = ({
  buttonElement,
  renderPopoverContent,
  expandHorizontalDirection = 'right',
}) => {
  const [htmlButtonElement, setHtmlButtonElement] =
    useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setHtmlButtonElement(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setHtmlButtonElement(null);
  };

  const isOpen = Boolean(htmlButtonElement);

  return (
    <>
      {cloneElement(buttonElement, {onClick: handleClick})}

      <Popover
        open={isOpen}
        anchorEl={htmlButtonElement}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: expandHorizontalDirection === 'right' ? 'left' : 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: expandHorizontalDirection === 'right' ? 'left' : 'right',
        }}
        slotProps={{
          paper: {
            elevation: 4,
            sx: {
              borderRadius: '10px',
              minWidth: 200,
            },
          },
        }}
        sx={{
          marginBlock: 0.5,
        }}
      >
        {renderPopoverContent(handlePopoverClose)}
      </Popover>
    </>
  );
};
