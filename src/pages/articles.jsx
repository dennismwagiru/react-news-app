import { useState } from 'react'
import {useQuery} from "react-query";

function App() {
    const [page, setPage] = useState(1)

    const fetchProjects = (page = 0) => fetch('http://127.0.0.1/api/articles?page=' + page).then((res) => res.json())

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['projects', page], () => fetchProjects(page), { keepPreviousData : true });

    console.log({data});


    return (
        <>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isError ? (
                    <div>Error: {error.message}</div>
                ) : (
                    <div>
                        {data.data.map(project => (
                            <p key={project.id}>{project.title}</p>
                        ))}
                    </div>
                )}
                <span>Current Page: {page}</span>
                <button
                    onClick={() => setPage(old => Math.max(old - 1, 1))}
                    disabled={page === 1}
                >
                    Previous Page
                </button>{' '}
                <button
                    onClick={() => {
                        if (!isPreviousData && data.meta?.pagination?.total_pages > page) {
                            setPage(old => old + 1)
                        }
                    }}
                    // Disable the Next Page button until we know a next page is available
                    disabled={isPreviousData || data?.meta?.pagination?.total_pages <= page}
                >
                    Next Page
                </button>
                {isFetching ? <span> Loading...</span> : null}{' '}
            </div>
        </>
    )
}

export default App
