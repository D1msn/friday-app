import { ICard } from './cardsPacksModels.types'

export type GetCardsModelType = {
    id?: string
}

export type AddCardModelType = {
    card: {
        cardsPack_id: string;
        question: string;
        answer: string;
        grade?: 0;
    }
}

export type ResponseAddCard = {
    newCard: ICard;
    token: string;
    tokenDeathTime: number;
}
