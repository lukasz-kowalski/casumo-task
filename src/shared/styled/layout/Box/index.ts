import styled from 'styled-components';

export interface BoxProps {
  width?: number;
  center?: boolean;
}

export const Box = styled.div<BoxProps>((p) => ({
  marginLeft: p.center ? 'auto' : 'unset',
  marginRight: p.center ? 'auto' : 'unset',
  marginBottom: p.theme.spacing[16],
  width: p.width || 'auto',
}));
