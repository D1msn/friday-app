import React from 'react'
import styled from 'styled-components'

const PageNotFoundWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div{
    display: flex;
    font-size: 180px;
    span.spin{
      margin: 0 25px;
      display: block;
      animation: spin 3s infinite ease-in-out;
    }
  }
  p{
    margin-top: -30px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 40px;
    padding-left: 75px;
  }
  
`

export const PageNotFound = () => (
    <PageNotFoundWrapper>
        <div>
            <span>4</span>
            <span className="spin">0</span>
            <span>4</span>
        </div>
        <p>Sorry page not found........</p>
    </PageNotFoundWrapper>
)
