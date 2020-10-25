import styled from 'styled-components';

export const H1 = styled.h1((p) => ({
  fontSize: p.theme.fontSize.xlarge,
  color: p.theme.colors.purple60,
  paddingBottom: p.theme.spacing[8],
}));
