import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ApiConfig, CardsApiUrls } from '../../constants/ApiConfig'
import { ResponseGetCards } from '../../types/cardsPacksModels.types'
import {
    AddCardModelType,
    GetCardsModelType,
    ResponseAddCard,
} from '../../types/cardsCardModel.types'

export const cardsApi = createApi({
    reducerPath: 'CardsApi',
    tagTypes: ['Cards'],
    baseQuery: fetchBaseQuery({ baseUrl: ApiConfig.BASE_URL, credentials: 'include' }),
    endpoints: (build) => ({
        getCards: build.query<ResponseGetCards, GetCardsModelType>({
            query: (model) => `${CardsApiUrls.CARDS_CARD}?cardsPack_id=${model.id}`,
            providesTags: ['Cards'],
        }),
        addCard: build.mutation<ResponseAddCard, AddCardModelType>({
            query: (body) => ({
                url: CardsApiUrls.CARDS_CARD,
                method: 'post',
                body,
            }),
            invalidatesTags: ['Cards'],
        }),
        deleteCard: build.mutation({
            query: (id) => ({
                url: `${CardsApiUrls.CARDS_CARD}?id=${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Cards'],
        }),
    }),
})

export const { useGetCardsQuery, useAddCardMutation, useDeleteCardMutation } = cardsApi
