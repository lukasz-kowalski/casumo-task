import React from 'react';
import { CardListProps } from './interface';
import * as S from 'shared/styled';
import Card from 'components/Card';

const CardList: React.FC<CardListProps> = ({ path, cards }) => {
  return (
    <>
      <S.Container>
        <S.H1>Your cards</S.H1>
        <S.SubHeader>Add, edit or delete your cards any time</S.SubHeader>
      </S.Container>
      <S.Container display="flex" justify="center">
        <S.Box width={350}>
          {cards.map((card) => (
            <Card key={card.number} {...card} path={path} />
          ))}
        </S.Box>
      </S.Container>
    </>
  );
};

export default CardList;
