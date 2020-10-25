import styled from 'styled-components';

export interface BoxProps {
  width?: number;
}

export const Box = styled.div<BoxProps>((p) => ({
  marginBottom: p.theme.spacing[16],
  width: p.width || 'auto',
}));
