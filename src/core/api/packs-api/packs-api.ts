import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ApiConfig, CardsApiUrls } from '../../constants/ApiConfig'
import { ResponceGetCardsPackType } from '../../types/cardsPacksModels.types'

export const packsApi = createApi({
    reducerPath: 'PacksApi',
    tagTypes: ['Packs'],
    baseQuery: fetchBaseQuery({ baseUrl: ApiConfig.BASE_URL, credentials: 'include' }),
    endpoints: (build) => ({
        getCardsPacks: build.query<ResponceGetCardsPackType, {
            count:number, userId:string, debouncedSearchQuery: string, page: number
        }>({
            query: (body) => `${CardsApiUrls.CARDS_PACK}?pageCount=${body.count}&page=${body.page}&user_id=${body.userId}&packName=${body.debouncedSearchQuery}`,
            providesTags: (result) => (result
                ? [
                    ...result.cardPacks.map(({ _id }) => ({ type: 'Packs', _id } as const)),
                    { type: 'Packs', id: 'LIST' },
                ]
                : [{ type: 'Packs', id: 'LIST' }]),
        }),
        addCardsPack: build.mutation({
            query: (body) => ({
                url: CardsApiUrls.CARDS_PACK,
                method: 'post',
                body,
            }),
            invalidatesTags: [{ type: 'Packs', id: 'LIST' }],
        }),
        deleteCardsPack: build.mutation({
            query: (packId: string) => ({
                url: `${CardsApiUrls.CARDS_PACK}?id=${packId}`,
                method: 'delete',
            }),
            invalidatesTags: [{ type: 'Packs', id: 'LIST' }],
        }),
        updateCardsPackName: build.mutation({
            query: (body) => ({
                url: CardsApiUrls.CARDS_PACK,
                method: 'put',
                body,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Packs', id: arg._id }],
        }),
    }),
})

export const {
    useGetCardsPacksQuery,
    useDeleteCardsPackMutation,
    useAddCardsPackMutation,
    useUpdateCardsPackNameMutation,
} = packsApi
