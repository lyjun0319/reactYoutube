import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Main from "./pages/main";
import Root from "./root";
import Detail from "./pages/detail";
import NotFound404 from "./components/error/notFound404";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement : <NotFound404/>,
    children : [
      {
        index:true,
        element: <Main/>
      },
      {
        path:"/detail/:detailId",
        element:<Detail/>
      }
    ]
  }
])
function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App;
