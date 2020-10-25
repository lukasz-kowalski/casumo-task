import { CardData } from 'components/Card/interface';

const localStorageService = {
  getCards: () => {
    const cards: CardData[] = JSON.parse(localStorage.getItem('cards') || '[]');

    return cards;
  },

  getCard: (cvc: string) => {
    const cards: CardData[] = localStorageService.getCards();
    return cards.find((card) => card.cvc === cvc);
  },

  setCard: (card: CardData) => {
    const cards: CardData[] = localStorageService.getCards();

    cards.push(card);

    return localStorage.setItem('cards', JSON.stringify(cards));
  },
};

export default localStorageService;
