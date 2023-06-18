import {useSearchParams} from "react-router-dom";
import {useQuery} from "react-query";
import Loading from "../components/Loading.jsx";
import Message from "../components/Message.jsx";
import Pagination from "../components/Pagination.jsx";
import Author from "../components/containers/Author.jsx";

const Authors = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page')

    const fetchAuthors = (page = 0) => fetch('http://127.0.0.1/api/authors?includes[]=source&page=' + page).then((res) => res.json())

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['authors', page], () => fetchAuthors(page), { keepPreviousData : true });
    return (
        <div className='container'>
            <Loading isLoading={isLoading} />

            { isError ? (
                <Message message={error.message} />
            ) : (
                <>
                    <div className='row'>
                        {data?.data?.map(author => <Author {...author} key={author.id} />)}
                    </div>
                    <Pagination {...data?.meta?.pagination} />
                </>
            )}
        </div>
    );
};

export default Authors