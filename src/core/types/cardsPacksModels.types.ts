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

export interface ICard {
                _id: string;
                cardsPack_id: string;
                user_id: string;
                answer: string;
                question: string;
                grade: number;
                shots: number;
                comments: string;
                type: string;
                rating: number;
                more_id: string;
                created: string;
                updated: string;
                __v: number;
                answerImg: string;
                answerVideo: string;
                questionImg: string;
                questionVideo: string;
        }

export interface ResponseGetCards {
                cards: ICard[];
                packUserId: string;
                page: number;
                pageCount: number;
                cardsTotalCount: number;
                minGrade: number;
                maxGrade: number;
                token: string;
                tokenDeathTime: number;
        }
