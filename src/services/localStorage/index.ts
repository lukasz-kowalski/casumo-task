import { CardData } from 'components/Card/interface';

const localStorageService = {
  getCards: () => {
    const cards: CardData[] = JSON.parse(localStorage.getItem('cards') || '[]');

    return cards;
  },

  getCard: (id: string) => {
    const cards: CardData[] = localStorageService.getCards();
    return cards.find((card) => card.id === id);
  },

  addCard: (card: CardData) => {
    const cards: CardData[] = localStorageService.getCards();

    cards.push(card);

    return localStorage.setItem('cards', JSON.stringify(cards));
  },

  editCard: (id: string, card: CardData) => {
    const cards: CardData[] = localStorageService.getCards();

    const index = cards.findIndex((card) => card.id === id);

    cards[index] = card;

    return localStorage.setItem('cards', JSON.stringify(cards));
  },

  deleteCard: (id: string) => {
    const cards: CardData[] = localStorageService.getCards();

    const index = cards.findIndex((card) => card.id === id);

    cards.splice(index, 1);

    return localStorage.setItem('cards', JSON.stringify(cards));
  },
};

export default localStorageService;
