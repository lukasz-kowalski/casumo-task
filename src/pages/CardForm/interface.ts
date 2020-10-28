import { CardFormData } from 'components/CardForm/interface';
import { CardData } from 'components/Card/interface';

export enum Strategy {
  ADD = 'ADD',
  EDIT = 'EDIT',
}

export interface StrategyProvider {
  header: string;
  isAddForm: boolean;
  mapCardForSave: (card: CardFormData, cardFromStore?: CardData) => CardData;
  mapCardForView?: (card: CardData) => CardFormData;
}
