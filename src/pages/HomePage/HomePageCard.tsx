import React from 'react'

import styled from 'styled-components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
    useAddCardMutation,
    useDeleteCardMutation,
    useGetCardsQuery,
} from '../../core/api/cards-api/cards-api'
import { formatDate } from '../../core/utils/dates'
import { SearchInput } from '../../styles/utils.styles'

import {
    ActionsButton, HomeBody, HomeTitle, HomeWrapper,
} from './HomePage.styled'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'
import MainPopup from '../../components/popups/MainPopup/MainPopup'

const GoBackButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  
  svg{
    margin-right: 5px;
  }
`

type LocationState = {
    fromPack: {
        path: string;
    }
}

export const HomePageCard = () => {
    const { id } = useParams<{ id: string | undefined }>()
    const { data, isLoading, isError } = useGetCardsQuery({ id })
    const myId = useTypedSelector<string>(state => state.userReducer.userInfo._id)

    const { fromPack } = useLocation().state as LocationState
    const navigate = useNavigate()

    if (isError) {
        return <div>Что то пошло не так</div>
    }

    const myPack = myId === data?.packUserId
    const rowClass = !myPack ? 'not-my' : ''

    const [addCard] = useAddCardMutation()
    const [deleteCard] = useDeleteCardMutation()

    const onAddCard = () => {
        if (id) {
            addCard({
                card: {
                    cardsPack_id: id,
                    question: 'asdasd',
                    answer: 'asdasd',
                },
            })
        }
    }

    return (
        <HomeWrapper>
            <HomeBody>
                <HomeTitle>
                    <GoBackButton type="button" onClick={() => navigate(-1)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5 12H3.67004" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {fromPack}
                    </GoBackButton>
                </HomeTitle>
                <div style={{ display: 'flex', marginBottom: 20, justifyContent: 'space-between' }}>
                    <SearchInput
                        type="text"
                        placeholder="Search....."
                    />

                    {myPack && (
                        <ActionsButton
                            className="add"
                            onClick={onAddCard}
                        >
                        Add card
                        </ActionsButton>
                    ) }

                </div>
                <div className="table">
                    <div className="table__header">
                        <div className={`table__row ${rowClass}`}>
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
                            {myPack && (
                                <div className="table__cell">
                                Actions
                                </div>
                            )}
                        </div>
                    </div>
                    {isLoading || !data ? <div>Loading.......</div>
                        : (
                            <div className="table__body">
                                {!data.cards.length && <div>NO cards</div>}
                                {data.cards.map((card) => (
                                    <div key={card._id} className={`table__row ${rowClass}`}>
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
                                        {myPack && (
                                            <div className="table__cell actions">
                                                <ActionsButton onClick={() => deleteCard(card._id)} variant="red">
                                                Delete
                                                </ActionsButton>
                                                <ActionsButton variant="light-blue">
                                                Edit
                                                </ActionsButton>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                </div>

            </HomeBody>
            <MainPopup title="asdasd" onClose={() => {}} isOpened className="asdd111">123123</MainPopup>
        </HomeWrapper>
    )
}
