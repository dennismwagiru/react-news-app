import {useQuery} from "react-query";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import Loading from "../components/Loading.jsx";
import Message from "../components/Message.jsx";
import Article from "../components/containers/Article.jsx";
import {Col, Row} from "react-bootstrap";
import SearchableSelect from "../components/SearchableSelect.jsx";
import handler from "../../utils/api.js";
import {useState} from "react";
import axios from "axios";

function App() {
    const [filters, setFilters] = useState({});
    let [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');

    const fetchArticles = () => handler.get('articles', { ...filters, page}).then(res => res);

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['articles', page], () => fetchArticles(), { keepPreviousData : true });

    // TODO: Implement Search and Filter

    return (
        <div className='container'>

            <Loading isLoading={isLoading} />

            { isError ? (
                <Message message={error.message} />
            ) : (
                <>
                    <Row>
                        <Col md={12} className='mb-2'>
                            <input className='form-control' placeholder='Search Stories'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className='mb-2'>
                            <SearchableSelect
                                onChange={selected => setFilters({ ...filters, source_ids: selected?.map(el => el?.value)})}
                                map={el => ({label: el?.name, value: el?.id})}
                                fetchOptions={(query) => handler.get("sources?query=" + query)}
                            />
                        </Col>
                        <Col md={3} className='mb-2'>
                            <SearchableSelect
                                onChange={selected => setFilters({ ...filters, author_ids: selected?.map(el => el?.value)})}
                                map={el => ({label: el?.name, value: el?.id})}
                                fetchOptions={(query) => handler.get("authors?query=" + query)}
                            />
                        </Col>
                        <Col md={3} className='mb-2'>
                            <SearchableSelect
                                onChange={selected => setFilters({ ...filters, category_ids: selected?.map(el => el?.value)})}
                                map={el => ({label: el?.name, value: el?.id})}
                                fetchOptions={(query) => handler.get("categories?query=" + query)}
                            />
                        </Col>

                        <Col md={3} className='text-end'>
                            <button className='btn btn-success'>Filter</button>
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
