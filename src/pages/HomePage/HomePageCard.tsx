import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useGetCardsQuery } from '../../core/api/cards-api/cards-api'
import { formatDate } from '../../core/utils/dates'
import { SearchInput } from '../../styles/utils.styles'

import {
    ActionsButton, HomeBody, HomeTitle, HomeWrapper,
} from './HomePage.styled'

export const HomePageCard = () => {
    const { id } = useParams<{ id: string | undefined }>()
    const { data, isLoading, isError } = useGetCardsQuery({ id })

    if (isError) {
        return <div>Что то пошло не так</div>
    }

    return (
        <HomeWrapper>
            <HomeBody>
                <HomeTitle>Packs list</HomeTitle>
                <div style={{ display: 'flex', marginBottom: 20, justifyContent: 'space-between' }}>
                    <SearchInput
                        type="text"
                        placeholder="Search....."
                    />
                    <ActionsButton
                        style={{ width: '28%', height: '100%' }}
                    >
                    Add card
                    </ActionsButton>
                </div>
                <div className="table">
                    <div className="table__header">
                        <div className="table__row">
                            <div className="table__cell">
                            Question
                            </div>
                            <div className="table__cell">
                            Answer
                            </div>
                            <div className="table__cell">
                            Last Updated
                            </div>
                            <div className="table__cell">
                            Grade
                            </div>
                            <div className="table__cell">
                            Actions
                            </div>
                        </div>
                    </div>
                    {isLoading || !data ? <div>Loading.......</div>
                        : (
                            <div className="table__body">
                                {data.cards.map((card) => (
                                    <div key={card._id} className="table__row">
                                        <div className="table__cell">
                                            {card.question}
                                        </div>
                                        <div className="table__cell">
                                            {card.answer}
                                        </div>
                                        <div className="table__cell">
                                            {formatDate(card.updated, 'D')}
                                        </div>
                                        <div className="table__cell">
                                            {card.grade}
                                        </div>
                                        <div className="table__cell actions">

                                            <ActionsButton variant="red">
                                            Delete
                                            </ActionsButton>
                                            <ActionsButton variant="light-blue">
                                            Edit
                                            </ActionsButton>

                                            <ActionsButton variant="light-blue">
                                            Learn
                                            </ActionsButton>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                </div>

            </HomeBody>
        </HomeWrapper>
    )
}
