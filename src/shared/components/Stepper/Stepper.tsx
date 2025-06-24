import {FC, Fragment, useMemo} from 'react';
import {Box, BoxProps} from '@mui/material';
import range from 'lodash/range';

import {Connector} from './Connector';
import {Step} from './Step';

interface Props extends BoxProps {
  activeStep: number;
  stepCount: number;
}

export const Stepper: FC<Props> = ({stepCount, activeStep, ...restProps}) => {
  const stepIndexes = useMemo(() => {
    return range(stepCount);
  }, [stepCount]);

  return (
    <Box display="flex" alignItems="center" gap={2} {...restProps}>
      {stepIndexes.map(index => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        const step = (
          <Step
            key={index}
            isActive={isActive}
            isCompleted={isCompleted}
            stepNumber={index + 1}
          />
        );

        const connector = <Connector isCompleted={isCompleted} />;

        if (index === stepIndexes.length - 1) {
          return step;
        }

        return (
          <Fragment key={index}>
            {step}
            {connector}
          </Fragment>
        );
      })}
    </Box>
  );
};
