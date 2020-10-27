import { CardData } from 'components/Card/interface';

export interface CardListProps {
  cardPaths: {
    add: string;
    edit: string;
  };
  cards: CardData[];
}
