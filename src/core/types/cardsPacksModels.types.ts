export interface ICardsPack {
        _id: string;
        user_id: string;
        user_name: string;
        private: boolean;
        name: string;
        path: string;
        grade: number;
        shots: number;
        cardsCount: number;
        type: string;
        rating: number;
        created: string;
        updated: string;
        more_id: string;
        __v: number;
        deckCover: string;
    }

export type ResponceGetCardsPackType = {
        cardPacks: ICardsPack[];
        page: number;
        pageCount: number;
        cardPacksTotalCount: number;
        minCardsCount: number;
        maxCardsCount: number;
        token: string;
        tokenDeathTime: number;
    }
