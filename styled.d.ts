import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      4: string;
      8: string;
      16: string;
      24: string;
      32: string;
      40: string;
      48: string;
      56: string;
    };

    fontSize: {
      xsmall: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
    };

    borderRadius: {
      semiRounded: string;
      rounded: string;
      circle: string;
    };

    colors: {
      purple60: string;
      purple90: string;
      purple: string;
      background: string;
      white: string;
      grey20: string;
      grey50: string;
      grey70: string;
      grey90: string;
      green30: string;
      red30: string;
      teal: string;
    };
  }
}
