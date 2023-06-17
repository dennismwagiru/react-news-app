import React from 'react';
import {useSearchParams} from "react-router-dom";

const Pagination = ({pagination}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active" aria-current="page">
                        <span className="page-link">{pagination?.current_page}</span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => setSearchParams({'page': 2})}>2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            {/*<button*/}
            {/*    onClick={() => setPage(old => Math.max(old - 1, 1))}*/}
            {/*    disabled={page === 1}*/}
            {/*>*/}
            {/*    Previous Page*/}
            {/*</button>{' '}*/}
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        if (!isPreviousData && data.meta?.pagination?.total_pages > page) {*/}
            {/*            setPage(old => old + 1)*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    // Disable the Next Page button until we know a next page is available*/}
            {/*    disabled={isPreviousData || data?.meta?.pagination?.total_pages <= page}*/}
            {/*>*/}
            {/*    Next Page*/}
            {/*</button>*/}
        </>
    )
}

export default Pagination