import { useState } from 'react'
import {useQuery} from "react-query";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagination.jsx";

function App() {
    let [searchParams, setSearchParams] = useSearchParams();
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
                <Pagination pagination={data?.meta?.pagination} />
                {isFetching ? <span> Loading...</span> : null}{' '}
            </div>
        </>
    )
}

export default App
