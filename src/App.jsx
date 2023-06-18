import {lazy, Suspense} from "react";
import './App.scss'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {
    Route,
    Routes,
} from "react-router-dom";
import Loading from "./components/Loading.jsx";
import Navbar from "./components/Navbar.jsx";

const Articles = lazy(() => import('./pages/articles.jsx'));
const Authors = lazy(() => import('./pages/authors.jsx'));
const Categories = lazy(() => import('./pages/categories.jsx'));
const Sources = lazy(() => import('./pages/sources.jsx'));

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Articles />}/>
                    <Route path="/authors" element={<Authors />}/>
                    <Route path="/categories" element={<Categories />}/>
                    <Route path="/sources" element={<Sources />}/>
                </Routes>

            </Suspense>
        </QueryClientProvider>
    )
}

export default App
