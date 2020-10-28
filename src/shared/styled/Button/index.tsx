import styled from 'styled-components';

export const ButtonContainer = styled.div((p) => ({
  position: 'fixed',
  bottom: '5%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '300px',
}));

export const Button = styled.button((p) => ({
  background: p.theme.colors.purple60,
  paddingTop: p.theme.spacing[16],
  paddingBottom: p.theme.spacing[16],
  borderRadius: p.theme.borderRadius.rounded,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  color: p.theme.colors.white,
  fontSize: p.theme.fontSize.base,
  width: '100%',
  fontWeight: 'bold',

  '&:disabled': {
    background: p.theme.colors.background,
  },
}));

export const DeleteButton = styled(Button)((p) => ({
  background: 'transparent',
  color: p.theme.colors.grey20,
  marginTop: p.theme.spacing[8],
}));
