import {useQuery} from "react-query";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import Loading from "../components/Loading.jsx";
import Message from "../components/Message.jsx";
import Article from "../components/Article.jsx";

function App() {
    let [searchParams] = useSearchParams();
    const page = searchParams.get('page')

    const fetchArticles = (page = 0) => fetch('http://127.0.0.1/api/articles?page=' + page).then((res) => res.json())

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['articles', page], () => fetchArticles(page), { keepPreviousData : true });


    return (
        <div className='container'>

            <Loading isLoading={isLoading} />

            { isError ? (
                <Message message={error.message} />
            ) : (
                <>
                    <div className='row'>
                        {data?.data?.map(article => (
                            <Article {...article} key={article.id} />
                        ))}
                    </div>
                    <Pagination {...data?.meta?.pagination} />
                </>
            )}
        </div>
    )
}

export default App
