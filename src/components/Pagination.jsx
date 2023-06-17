import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Pagination = ({current_page, total_pages}) => {
    const [pages, setPages] = React.useState([]);

    React.useEffect(() => {
        window.scroll(0, 0);
        if (current_page && total_pages) {
            let list = [];
            let start = current_page - 2 <= 0 ? 1 : current_page - 2;
            let diff = total_pages - current_page;
            let end = diff >= 3 ? current_page + 3 : current_page + diff;
            for (let i = start; i <= end; i++) {
                list.push(i)
            }
            setPages(list);
        }
    }, [current_page, total_pages]);

    return (
        <>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${current_page <= 1 ? 'disabled' : ''}`}>
                        <Link className="page-link" to={`?page=${+current_page - 1}`}>Previous</Link>
                    </li>

                    {
                        pages.map( (page) => {
                            return (
                                <li className={`page-item ${page === current_page ? 'active' : ''}`} key={page}>
                                    <Link className="page-link" to={`?page=${page}`} >{page}</Link>
                                </li>
                            )
                        })
                    }

                    <li className={`page-item ${current_page >= total_pages ? 'disabled' : ''}`}>
                        <Link className="page-link" to={`?page=${+current_page + 1}`}>Next</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

Pagination.propTypes = {
    total: PropTypes.number,
    count: PropTypes.number,
    per_page: PropTypes.number,
    current_page: PropTypes.number,
    total_pages: PropTypes.number,
};

export default Pagination