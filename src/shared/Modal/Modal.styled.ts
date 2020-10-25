import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div((p) => ({
  position: 'absolute',
  background: p.theme.colors.white,
  width: '100%',
  bottom: 0,
  padding: p.theme.spacing[24],
  borderRadius: `${p.theme.borderRadius.rounded} ${p.theme.borderRadius.rounded} 0 0`,
}));

export const CloseButton = styled.button((p) => ({
  fontSize: p.theme.fontSize.base,
  fontWeight: 'bold',
  background: 'transparent',
  border: 'none',
  marginLeft: 'auto',
}));

export const H2 = styled.h2((p) => ({
  fontSize: p.theme.fontSize.large,
  marginBottom: p.theme.spacing[32],
}));
