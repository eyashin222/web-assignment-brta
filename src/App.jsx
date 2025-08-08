import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/Login";
import PageNotFount from "./pages/PageNotFount";
import Location from "./pages/Location";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 1000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#D3D3D3",
            color: "#484848",
          },
        }}
      />
    </QueryClientProvider>
  );
}
export default App;
