import {lazy, Suspense} from "react";
import './App.scss'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {
    Route,
    Routes, useSearchParams,
} from "react-router-dom";
import Loading from "./components/Loading.jsx";

const Layout = lazy(() => import('./pages/layout.jsx'));
const AuthLayout = lazy(() => import('./pages/auth/layout.jsx'));

function App() {
    const queryClient = new QueryClient()
    const [searchParams] = useSearchParams();

    console.log({params: searchParams.get('modal') })

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/auth/*" element={<AuthLayout />}/>
                    <Route path="/*" element={<Layout />}/>
                </Routes>
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
