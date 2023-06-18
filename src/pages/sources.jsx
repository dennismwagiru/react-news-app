import {useSearchParams} from "react-router-dom";
import {useQuery} from "react-query";
import Loading from "../components/Loading.jsx";
import Message from "../components/Message.jsx";
import Pagination from "../components/Pagination.jsx";
import Source from "../components/containers/Source.jsx";

const Sources = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page')

    const fetchSources = (page = 1) => fetch('http://127.0.0.1:8000/api/sources?includes[]=categories?includes[]=authors&page=' + page).then((res) => res.json())

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['sources', page], () => fetchSources(page), { keepPreviousData : true });
    return (
        <div className='container'>
            <Loading isLoading={isLoading} />

            { isError ? (
                <Message message={error.message} />
            ) : (
                <>
                    <div className='row'>
                        {data?.data?.map(source => <Source {...source} key={source.id} />)}
                    </div>
                    <Pagination {...data?.meta?.pagination} />
                </>
            )}
        </div>
    );
};

export default Sources