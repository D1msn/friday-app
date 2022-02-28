import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ApiConfig, CardsApiUrls } from '../../constants/ApiConfig'
import { ResponseGetCards } from '../../types/cardsPacksModels.types'

type GetCardsModelType = {
    id?: string
}

export const cardsApi = createApi({
    reducerPath: 'CardsApi',
    tagTypes: ['Cards'],
    baseQuery: fetchBaseQuery({ baseUrl: ApiConfig.BASE_URL, credentials: 'include' }),
    endpoints: (build) => ({
        getCards: build.query<ResponseGetCards, GetCardsModelType>({
            query: (model) => `${CardsApiUrls.CARDS_CARD}?cardsPack_id=${model.id}`,
        }),

    }),
})

export const { useGetCardsQuery } = cardsApi
