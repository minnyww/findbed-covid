// import GoogleAnalytic from "../GoogleAnalytic";
import "../styles/globals.css";
import Script from "next/script";
import { GA_TRACKING_ID } from "../lib/gtag";
// import * as gtag from "../lib/gtag";
// import { useRouter } from "next/dist/client/router";
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };

  //   router.events.on("beforeHistoryChange", () => console.log("tset"));
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <div>
      <Component {...pageProps} />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2T6X6GCGC2`}
      />

      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2T6X6GCGC2', {
        page_path: window.location.pathname,
      });
  `}
      </Script>
    </div>
  );
}

export default MyApp;
