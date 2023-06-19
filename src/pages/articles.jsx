import {useQuery} from "react-query";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import Loading from "../components/Loading.jsx";
import Message from "../components/Message.jsx";
import Article from "../components/containers/Article.jsx";
import {Col, Row} from "react-bootstrap";
import SearchableSelect from "../components/SearchableSelect.jsx";
import handler from "../../utils/api.js";
import {useEffect, useState} from "react";

let timeout = null;

function App() {
    const [filters, setFilters] = useState({});
    let [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    const sources = searchParams.get('sources')?.split(",")
    const categories = searchParams.get('categories')?.split(",")
    const authors = searchParams.get('authors')?.split(",");
    const query = searchParams.get('query');

    useEffect(() => {
        setSearchParams({ page: 1, ...filters})
    }, [filters])

    const fetchArticles = () =>
        handler.get('articles', {
            page, query, source_ids: sources, author_ids: authors, category_ids: categories
        }).then(res => res);

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: ['articles', page, sources, authors, categories, query],
        queryFn: async () => fetchArticles({ ...filters, page, query}),
        keepPreviousData : true
    });

    return (
        <div className='container'>

            <Loading isLoading={isLoading} />

            { isError ? (
                <Message message={error.message} />
            ) : (
                <>
                    <Row>
                        <Col md={12} className='mb-2'>
                            <input className='form-control' placeholder='Search Stories'
                                   onKeyUp={({target}) => {
                                       clearTimeout(timeout);
                                       timeout = setTimeout(() => {
                                           setFilters({ ...filters, query: target.value});
                                       }, 1000)
                                   }}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className='mb-2'>
                            <label>Source</label>
                            <SearchableSelect
                                isMulti
                                onChange={selected => setFilters({ ...filters, sources: selected?.map(el => el?.value).join(",")})}
                                map={el => ({label: el?.name, value: el?.id})}
                                fetchOptions={(query) => handler.get("sources?query=" + query)}
                                placeHolder='Sorces'
                            />
                        </Col>
                        <Col md={3} className='mb-2'>
                            <label>Author</label>
                            <SearchableSelect
                                isMulti
                                onChange={selected => setFilters({ ...filters, authors: selected?.map(el => el?.value).join(",")})}
                                map={el => ({label: el?.name, value: el?.id})}
                                fetchOptions={(query) => handler.get("authors?query=" + query)}
                            />
                        </Col>
                        <Col md={3} className='mb-2'>
                            <label>Category</label>
                            <SearchableSelect
                                isMulti
                                onChange={selected => setFilters({ ...filters, categories: selected?.map(el => el?.value).join(",")})}
                                map={el => ({label: el?.name, value: el?.id})}
                                fetchOptions={(query) => handler.get("categories?query=" + query)}
                            />
                        </Col>

                    </Row>
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
