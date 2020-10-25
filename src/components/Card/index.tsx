import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Card.styled';
import { FlexRow } from 'shared/styled/layout/FlexRow';
import Edit from 'shared/icons/Edit';
import { CardProps } from './interface';
import { getCardIcon } from './utils';

const Card: React.FC<CardProps> = ({ cvc, expiryDate, name, number, type, path }) => {
  const location = useLocation();
  const IconComponent = getCardIcon(type);
  const splittedCardNumber = number.match(/.{1,4}/g) || [];

  const renderCardNumber = (numbers: string[]) => {
    return numbers.map((number, index) => {
      if (index === 0) {
        return <p key={number}>{number}</p>;
      }

      return (
        <S.Item key={number} small>
          {number}
        </S.Item>
      );
    });
  };

  return (
    <S.Card variant={type}>
      <div>
        <FlexRow>
          <div>
            <IconComponent />
          </div>
          <FlexRow>
            <S.Item>
              <S.SubDetails variant={type}>CVC</S.SubDetails>
              <S.ImportantData>{cvc}</S.ImportantData>
            </S.Item>
            <S.Item>
              <S.SubDetails variant={type}>EXPIRES</S.SubDetails>
              <S.ImportantData>{expiryDate}</S.ImportantData>
            </S.Item>
          </FlexRow>
        </FlexRow>
      </div>

      <div>
        <S.ImportantData>{name}</S.ImportantData>
        <FlexRow>
          <FlexRow justify="flex-start">{renderCardNumber(splittedCardNumber)}</FlexRow>
          {path && (
            <div>
              <Link
                to={{
                  pathname: `${path}/${cvc}`,
                  state: { background: location },
                }}>
                <Edit />
              </Link>
            </div>
          )}
        </FlexRow>
      </div>
    </S.Card>
  );
};

export default Card;
