import styled from 'styled-components';
import { ContainerProps } from './interface';

export const Container = styled.div<ContainerProps>((p) => ({
  margin: `${p.theme.spacing[56]} auto 0 auto`,
  padding: `0 ${p.theme.spacing[16]}`,
  display: p.display || 'block',
  justifyContent: p.justify || 'unset',
  maxWidth: '336px',
}));
