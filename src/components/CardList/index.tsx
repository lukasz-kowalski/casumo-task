import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CardListProps } from './interface';

const CardList: React.FC<CardListProps> = ({ path }) => {
  let location = useLocation();
  let { id } = useParams<{ id: string }>();

  return (
    <div>
      <Link
        to={{
          pathname: `${path}`,
          state: { background: location },
        }}>
        ABC
      </Link>
    </div>
  );
};

export default CardList;
