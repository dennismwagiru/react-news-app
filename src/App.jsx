import { useState } from 'react'
import './App.scss'
import Logo from "./components/Logo.jsx";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Articles from "./pages/articles.jsx";
import {
    Route,
    Routes,
} from "react-router-dom";

function App() {

    const queryClient = new QueryClient()

    return (
        <>
            <Logo />
            <Routes>
                <Route path="/"
                       element={
                           <QueryClientProvider client={queryClient}>
                               <Articles />
                           </QueryClientProvider>
                       }
                />
            </Routes>

        </>
    )
}

export default App
