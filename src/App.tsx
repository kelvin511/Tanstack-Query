import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Products from "./Components/Products"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Products />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
