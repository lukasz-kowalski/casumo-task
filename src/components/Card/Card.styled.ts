import styled from 'styled-components';
import purpleBackground from 'shared/images/card-background-shape-purple.svg';
import tealBackground from 'shared/images/card-background-shape-teal.svg';
import { CardVariant, VariantProps, ItemProps } from './interface';
import { COLORS } from 'shared/interface/globalInterface';

const variantMap: CardVariant = {
  masterCard: {
    color: COLORS.white,
    background: COLORS.purple,
    backgroundImg: purpleBackground,
  },
  visa: { color: COLORS.grey90, background: COLORS.teal, backgroundImg: tealBackground },
};

export const Card = styled.div<VariantProps>((p) => ({
  backgroundColor: variantMap[p.variant].background,
  backgroundImage: `url(${variantMap[p.variant].backgroundImg})`,
  backgroundPosition: 'bottom right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  minHeight: '180px',
  borderRadius: p.theme.borderRadius.rounded,
  padding: p.theme.spacing[24],
  color: p.theme.colors.white,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  marginBottom: p.theme.spacing[16],
}));

export const Item = styled.div<ItemProps>((p) => ({
  marginLeft: p.small ? p.theme.spacing[16] : p.theme.spacing[24],
}));

export const NumberWrapper = styled.div<ItemProps>((p) => ({
  wordSpacing: p.theme.spacing[16],
}));

export const SubDetails = styled.p<VariantProps>((p) => ({
  fontSize: p.theme.fontSize.xsmall,
  color: variantMap[p.variant].color,
}));

export const ImportantData = styled.p((p) => ({
  fontWeight: 'bold',
  paddingTop: p.theme.spacing[4],
  marginBottom: p.theme.spacing[8],
}));
