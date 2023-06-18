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
import NavbarTop from "./components/NavbarTop.jsx";

const Articles = lazy(() => import('./pages/articles.jsx'));
const Authors = lazy(() => import('./pages/authors.jsx'));
const Categories = lazy(() => import('./pages/categories.jsx'));
const Sources = lazy(() => import('./pages/sources.jsx'));
const Profile = lazy(() => import('./pages/profile.jsx'));
const Login = lazy(() => import('./pages/auth/login.jsx'));
const Register = lazy(() => import('./pages/auth/register.jsx'));
const ForgotPassword = lazy(() => import('./pages/auth/forgot-password.jsx'));
const ResetPassword = lazy(() => import('./pages/auth/set-password.jsx'));

const ComingSoon = lazy(() => import('./pages/coming-soon.jsx'));

function App() {
    const queryClient = new QueryClient()
    const [searchParams] = useSearchParams();

    console.log({params: searchParams.get('modal') })

    return (
        <QueryClientProvider client={queryClient}>
            <NavbarTop />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Articles />}/>
                    <Route path="/authors" element={<Authors />}/>
                    <Route path="/authors/:id/articles" element={<ComingSoon />}/>
                    <Route path="/categories" element={<Categories />}/>
                    <Route path="/categories/:id/articles" element={<ComingSoon />}/>
                    <Route path="/sources" element={<Sources />}/>
                    <Route path="/sources/:id/articles" element={<ComingSoon />}/>
                    <Route path="/profile" element={<Profile />}/>
                    {/*Auth*/}
                    <Route path="/auth/register" element={<Register />}/>
                    <Route path="/auth/login" element={<Login />}/>
                    <Route path="/auth/forgot-password" element={<ForgotPassword />}/>
                    <Route path="/auth/reset-password" element={<ResetPassword />}/>
                </Routes>
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
