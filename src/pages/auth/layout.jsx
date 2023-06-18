import Loading from "../../components/Loading.jsx";
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const Login = lazy(() => import('./login.jsx'));
const Register = lazy(() => import('./register.jsx'));
const ForgotPassword = lazy(() => import('./forgot-password.jsx'));
const ResetPassword = lazy(() => import('./set-password.jsx'));

const Layout = () => {
    return (
        <div className='container'>
            <div className='row min-vh-100 flex-center g-0'>
                <div className='col-lg-8 col-xxl-5 py-3 position-relative'>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/forgot-password" element={<ForgotPassword />}/>
                            <Route path="/reset-password" element={<ResetPassword />}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Layout