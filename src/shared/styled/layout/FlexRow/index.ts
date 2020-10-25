import styled from 'styled-components';
import { FlexRowProps } from './interface';

export const FlexRow = styled.div<FlexRowProps>((p) => ({
  display: 'flex',
  justifyContent: p.justify || 'space-between',
}));
