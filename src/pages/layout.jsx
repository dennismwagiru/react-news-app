import Loading from "../components/Loading.jsx";
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import NavbarTop from "../components/NavbarTop.jsx";

const Articles = lazy(() => import('./articles.jsx'));
const Authors = lazy(() => import('./authors.jsx'));
const Categories = lazy(() => import('./categories.jsx'));
const Sources = lazy(() => import('./sources.jsx'));
const Profile = lazy(() => import('./profile.jsx'));
const ComingSoon = lazy(() => import('./coming-soon.jsx'));

const Layout = () => {
    return (
        <>
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
                </Routes>
            </Suspense>
        </>
    );
};

export default Layout