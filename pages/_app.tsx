import "../styles/index.css";

import { AppProps } from "next/app";
import { AuthProvider } from "src/auth/useAuth";
import Head from "next/head";

// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "src/apollo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Home Sweet Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
