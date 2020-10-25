import styled from 'styled-components';
import { PathProps } from './interface';

export const Path = styled.path<PathProps>((p) => ({
  fontSize: p.theme.fontSize.base,
  fill: p.error ? p.theme.colors.red30 : p.theme.colors.grey90,
}));
