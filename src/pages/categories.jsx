import {useSearchParams} from "react-router-dom";
import {useQuery} from "react-query";
import Loading from "../components/Loading.jsx";
import Message from "../components/Message.jsx";
import Pagination from "../components/Pagination.jsx";
import Category from "../components/containers/Category.jsx";

const Categories = () => {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page')

    const fetchCategories = (page = 1) => fetch('http://127.0.0.1:8000/api/categories?includes[]=sources&page=' + page).then((res) => res.json())

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['authors', page], () => fetchCategories(page), { keepPreviousData : true });
    return (
        <div className='container'>
            <Loading isLoading={isLoading} />

            { isError ? (
                <Message message={error.message} />
            ) : (
                <>
                    <div className='row'>
                        {data?.data?.map(category => <Category {...category} key={category.id} />)}
                    </div>
                    <Pagination {...data?.meta?.pagination} />
                </>
            )}
        </div>
    );
};

export default Categories