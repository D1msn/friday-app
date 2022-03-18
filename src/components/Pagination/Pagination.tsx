import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

type PaginationPropsTypes = {
    pageCount: number
    pageRangeDisplayed: number
    onChange: (selected: number) => void
    currentPage: number
    disabled: boolean
}

const StypedPagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  
  &.disabled{
    opacity: 0.5;
    pointer-events: none;
  }

  li {
    &:not(:last-child) {
      margin-right: 12px;
    }    

    &.selected {
      a {
        color: #F2F5F7;
        background-color: #21268F;
      }
    }

    &:not(.selected){
      a:hover {
        background-color: rgba(33, 38, 143, 0.03);
      }
    }

    a {
      padding: 2px 10px;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;      
    }
  }
`

export function Pagination({
    pageCount, pageRangeDisplayed, onChange, currentPage, disabled, ...props
}: PaginationPropsTypes) {
    const handlePageClick = (event: { selected: number }) => {
        onChange(event.selected + 1)
    }

    const wrapperClass = disabled ? 'disabled' : ''

    return (
        <StypedPagination
            className={wrapperClass}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageRangeDisplayed}
            pageCount={pageCount}
            marginPagesDisplayed={3}
            forcePage={currentPage - 1}
            {...props}
        />
    )
}
