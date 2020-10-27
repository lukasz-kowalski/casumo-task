import { INPUT_STATE } from './interface';

export const setInputState = (error: string, wasTouched: boolean) => {
  if (error && wasTouched) {
    return INPUT_STATE.ERROR;
  }

  if (!error && wasTouched) {
    return INPUT_STATE.VALID;
  }

  return INPUT_STATE.NORMAL;
};

export const getColor = (state: INPUT_STATE) => {
  const colors = {
    [INPUT_STATE.NORMAL]: 'grey20',
    [INPUT_STATE.ERROR]: 'red30',
    [INPUT_STATE.VALID]: 'green30',
  };

  return colors[state];
};
