import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "@/app/store";
import { ChakraProvider } from "@chakra-ui/react";
import AdminSideNav from "@/components/Admin/SideNav";
import UadminSideNav from "@/components/Uadmin/SideNav";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const router = useRouter();
  return (
    <>
      {router.pathname.includes("/admin", 0) && (router.pathname !== "/admin/login") ? (
        // Admin Side
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              {/* admin Global components */}
              <AdminSideNav />
              <Component {...pageProps} />
            </Provider>
          </QueryClientProvider>
        </ChakraProvider>
      ) : router.pathname.includes("/uadmin", 0) && (router.pathname !== "/uadmin/login") ? (
        // UAdmin Side
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              {/* Uadmin Global components */}
              <UadminSideNav/>
              <Component {...pageProps} />
            </Provider>
          </QueryClientProvider>
        </ChakraProvider>
      ) : (
        // User Side
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </QueryClientProvider>
        </ChakraProvider>
      )}
    </>
  );
}
