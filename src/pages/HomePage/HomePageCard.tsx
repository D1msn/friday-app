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

export const HomePageCard = () => (
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

                <div className="table__body">
                    <div className="table__row">
                        <div className="table__cell">
                                        123
                        </div>
                        <div className="table__cell">
                                        123
                        </div>
                        <div className="table__cell">
                                        123
                        </div>
                        <div className="table__cell">
                                        123
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
                </div>

            </div>

        </HomeBody>
    </HomeWrapper>
)
