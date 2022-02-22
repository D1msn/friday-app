import React from 'react'
import {
    HomeWrapper, HomeBody, SideBarFilters, FilterTitle, FilterWrapper, HomeTitle,
} from './HomePage.styled'
import Button from '../../components/common/Button/Button'

export const HomePage = () => (
    <HomeWrapper>
        <SideBarFilters>
            <FilterWrapper>
                <FilterTitle>
                    Show packs cards
                </FilterTitle>
                <div className="custom-radio">
                    <label htmlFor="my">
                        <input id="my" name="myCards" type="radio" className="visually-hidden" />
                        <span className="checkmark">My</span>
                    </label>
                    <label htmlFor="all">
                        <input id="all" name="myCards" type="radio" className="visually-hidden" />
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
            <div style={{ display: 'flex' }}>
                <input type="text" />
                <Button>
                    Add card
                </Button>
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
                <div className="table__body">
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">
                            Pack Name
                        </div>
                        <div className="table__cell">
                            4
                        </div>
                        <div className="table__cell">
                            18.03.2021
                        </div>
                        <div className="table__cell">
                            Ivan Ivanov
                        </div>
                        <div className="table__cell">
                            Delete Delete Delete
                        </div>
                    </div>
                </div>
            </div>
        </HomeBody>
    </HomeWrapper>
)
