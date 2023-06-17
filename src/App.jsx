import { useState } from 'react'
import './App.css'
import Logo from "./components/Logo.jsx";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Articles from "./pages/articles.jsx";

function App() {

    const queryClient = new QueryClient()

  return (
    <>
      <Logo />
        <QueryClientProvider client={queryClient}>
            <Articles />
        </QueryClientProvider>
    </>
  )
}

export default App
