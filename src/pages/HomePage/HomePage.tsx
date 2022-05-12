import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../core/utils/dates'
import { Pagination } from '../../components/Pagination/Pagination'

import {
    HomeWrapper, HomeBody, SideBarFilters, FilterTitle, FilterWrapper, HomeTitle, ActionsButton,
} from './HomePage.styled'

import {
    useAddCardsPackMutation,
    useDeleteCardsPackMutation,
    useGetCardsPacksQuery, useUpdateCardsPackNameMutation,
} from '../../core/api/packs-api/packs-api'

import { ICardsPack } from '../../core/types/cardsPacksModels.types'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'
import { useDebounce } from '../../core/hooks/useDebounce'
import { SearchInput } from '../../styles/utils.styles'
import { InputPopup } from '../../components/popups/InputPopup/InputPopup'

export const HomePage = () => {
    const myId = useTypedSelector<string>(state => state.userReducer.userInfo._id)
    const [currentPage, setCurrentPage] = useState(1)
    const [showInPage, setShowInPage] = useState(10)
    const [showAllPacks, setShowAllPacks] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedSearchQuery = useDebounce<string>(searchQuery, 800)
    const [isOpenModal, setIsOpenModal] = useState(true)

    const {
        data, isLoading, isError, isFetching,
    } = useGetCardsPacksQuery({
        count: showInPage,
        userId: showAllPacks,
        debouncedSearchQuery,
        page: currentPage,
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

    const onSubmitModal = (text: string) => {
        addPack({
            cardsPack: {
                name: text,
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
                        onClick={() => setIsOpenModal(true)}
                        className="add"
                    >
                    Add pack
                    </ActionsButton>
                </div>
                <div style={{ marginBottom: 30 }} className="table">
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
                                    <Link to={`/${pack._id}`} state={{ fromPack: pack.name }} className="table__row" key={pack._id}>
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

                {data && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Pagination
                            pageCount={data.cardPacksTotalCount / data.pageCount}
                            pageRangeDisplayed={2}
                            onChange={(selected) => setCurrentPage(selected)}
                            currentPage={data.page}
                            disabled={isFetching}
                        />
                        <div className="select">
                        Show

                            <select name="onPage" value={showInPage} onChange={(e) => setShowInPage(+e.currentTarget.value)}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>

                        Cards per Page

                        </div>
                    </div>
                )}

            </HomeBody>
            <InputPopup
                title="Enter pack name"
                onClose={() => setIsOpenModal(p => !p)}
                isOpened={isOpenModal}
                onSubmit={onSubmitModal}
            />
        </HomeWrapper>
    )
}
