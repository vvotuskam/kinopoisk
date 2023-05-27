import React from 'react';
import {Pagination} from "react-bootstrap";

const FilmPagination = ({totalPages, currentPage, handlePageChange}) => {

    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => handlePageChange(i)}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Pagination className="custom-pagination">
            {paginationItems}
        </Pagination>
    );
};

export default FilmPagination;