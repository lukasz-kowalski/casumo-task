import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CardListProps } from './interface';
import * as S from 'shared/styled';
import Card from 'components/Card';
import * as R from 'shared/styled/Button';

const CardList: React.FC<CardListProps> = ({ cardPaths, cards }) => {
  const location = useLocation();

  return (
    <>
      <S.Container>
        <S.H1>Your cards</S.H1>
        <S.SubHeader>Add, edit or delete your cards any time</S.SubHeader>
      </S.Container>
      <S.Container display="flex" justify="center">
        <S.Box width={300}>
          {cards.map((card) => (
            <Card key={card.number} {...card} path={cardPaths.edit} />
          ))}
        </S.Box>
      </S.Container>

      <R.ButtonContainer>
        <div>
          <Link
            to={{
              pathname: `${cardPaths.add}`,
              state: { background: location },
            }}>
            <R.Button>Add new card</R.Button>
          </Link>
        </div>
      </R.ButtonContainer>
    </>
  );
};

export default CardList;
