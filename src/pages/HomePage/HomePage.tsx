import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../core/utils/dates'

import {
    HomeWrapper, HomeBody, SideBarFilters, FilterTitle, FilterWrapper, HomeTitle, ActionsButton,
} from './HomePage.styled'

import {
    useAddCardsPackMutation,
    useDeleteCardsPackMutation,
    useGetCardsPacksQuery, useUpdateCardsPackNameMutation,
} from '../../core/api/cards-api/packs-api'

import { ICardsPack } from '../../core/types/cardsPacksModels.types'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'
import { useDebounce } from '../../core/hooks/useDebounce'
import { SearchInput } from '../../styles/utils.styles'
import { RouteNames } from '../../routes'

export const HomePage = () => {
    const myId = useTypedSelector<string>(state => state.userReducer.userInfo._id)
    const [showAllPacks, setShowAllPacks] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedSearchQuery = useDebounce(searchQuery, 800)

    const { data, isLoading, isError } = useGetCardsPacksQuery({
        count: 5,
        userId: showAllPacks,
        debouncedSearchQuery,
    })
    const [deletePack] = useDeleteCardsPackMutation()
    const [addPack] = useAddCardsPackMutation()
    const [editPackName] = useUpdateCardsPackNameMutation()

    const onEditPackName = (_id: string) => {
        editPackName({
            cardsPack: {
                _id,
                name: prompt(),
            },
        })
    }

    const onDeletePack = (id: string) => {
        deletePack(id)
    }

    const onAddPack = () => {
        addPack({
            cardsPack: {
                name: prompt(),
                private: false,
            },
        })
    }

    const onChangeSearch = (e: string) => {
        setSearchQuery(e)
    }

    if (isError) {
        return <div>Что то пошло не так...</div>
    }

    return (
        <HomeWrapper>
            <SideBarFilters>
                <FilterWrapper>
                    <FilterTitle>
                    Show packs cards
                    </FilterTitle>
                    <div className="custom-radio">
                        <label htmlFor="my">
                            <input
                                checked={showAllPacks === myId}
                                onChange={() => setShowAllPacks(myId)}
                                id="my"
                                name="myCards"
                                type="radio"
                                className="visually-hidden"
                            />
                            <span className="checkmark">My</span>
                        </label>
                        <label htmlFor="all">
                            <input
                                checked={showAllPacks === ''}
                                onChange={() => setShowAllPacks('')}
                                id="all"
                                name="myCards"
                                type="radio"
                                className="visually-hidden"
                            />
                            <span className="checkmark">All</span>
                        </label>
                    </div>
                </FilterWrapper>
                <FilterWrapper>
                    <FilterTitle>
                    Number of cards
                    </FilterTitle>
                </FilterWrapper>
            </SideBarFilters>
            <HomeBody>
                <HomeTitle>Packs list</HomeTitle>
                <div style={{ display: 'flex', marginBottom: 20, justifyContent: 'space-between' }}>
                    <SearchInput
                        onChangeText={onChangeSearch}
                        type="text"
                        placeholder="Search....."
                    />
                    <ActionsButton
                        onClick={onAddPack}
                        style={{ width: '28%', height: '100%' }}
                    >
                    Add pack
                    </ActionsButton>
                </div>
                <div className="table">
                    <div className="table__header">
                        <div className="table__row">
                            <div className="table__cell">
                                Name
                            </div>
                            <div className="table__cell">
                                Cards
                            </div>
                            <div className="table__cell">
                                Last Updated
                            </div>
                            <div className="table__cell">
                                Created by
                            </div>
                            <div className="table__cell">
                                Actions
                            </div>
                        </div>
                    </div>
                    {isLoading || !data ? <div>Loading.......</div>
                        : (
                            <div className="table__body">
                                {data.cardPacks.map((pack:ICardsPack) => (
                                    <Link to={`/${pack._id}`} className="table__row" key={pack._id}>
                                        <div className="table__cell">
                                            {pack.name}
                                        </div>
                                        <div className="table__cell">
                                            {pack.cardsCount}
                                        </div>
                                        <div className="table__cell">
                                            {formatDate(pack.updated, 'D')}
                                        </div>
                                        <div className="table__cell">
                                            {pack.user_name}
                                        </div>
                                        <div className="table__cell actions">
                                            {pack.user_id === myId && (
                                                <>
                                                    <ActionsButton variant="red" onClick={() => onDeletePack(pack._id)}>
                                                        Delete
                                                    </ActionsButton>
                                                    <ActionsButton variant="light-blue" onClick={() => onEditPackName(pack._id)}>
                                                        Edit
                                                    </ActionsButton>
                                                </>
                                            )}
                                            <ActionsButton variant="light-blue">
                                                Learn
                                            </ActionsButton>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                </div>

            </HomeBody>
        </HomeWrapper>
    )
}
