import { setInputState, getColor } from '../utils';
import { INPUT_STATE } from '../interface';

describe('TextInput utils', () => {
  describe('setInputState', () => {
    it('should return error state', () => {
      const error = 'error';
      const wasTouched = true;
      const expected = INPUT_STATE.ERROR;

      expect(setInputState(error, wasTouched)).toEqual(expected);
    });

    it('should return valid state', () => {
      const error = '';
      const wasTouched = true;
      const expected = INPUT_STATE.VALID;

      expect(setInputState(error, wasTouched)).toEqual(expected);
    });

    it('should return normal state', () => {
      const error = '';
      const wasTouched = false;
      const expected = INPUT_STATE.NORMAL;

      expect(setInputState(error, wasTouched)).toEqual(expected);
    });

    it('should return normal state', () => {
      const error = 'error';
      const wasTouched = false;
      const expected = INPUT_STATE.NORMAL;

      expect(setInputState(error, wasTouched)).toEqual(expected);
    });
  });

  describe('getColor', () => {
    it('should return grey20 color for normal state', () => {
      const state = INPUT_STATE.NORMAL;
      const expected = 'grey20';

      expect(getColor(state)).toEqual(expected);
    });

    it('should return red30 color for normal state', () => {
      const state = INPUT_STATE.ERROR;
      const expected = 'red30';

      expect(getColor(state)).toEqual(expected);
    });

    it('should return green30 color for valid state', () => {
      const state = INPUT_STATE.VALID;
      const expected = 'green30';

      expect(getColor(state)).toEqual(expected);
    });
  });
});
