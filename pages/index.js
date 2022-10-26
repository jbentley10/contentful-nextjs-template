/**
 * @file index.js
 */

// Import dependencies
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import TagManager from "react-gtm-module";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Footer from "../components/footer";

// Import styles
import { appTheme } from "../styles/appTheme";
import { homeBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchPage } from "../utils/contentfulData";

export default function Home(props) {
  const tagManagerArgs = {
    id: "GTM-P835S26",
  }
  
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  })

  return (
    <ThemeProvider theme={appTheme}>
      <Head>
        <title>Home | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`The home page of Epidemiologic Research & Methods.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero heroText={"Home"} heroImage={homeBackground} />
      <Footer />
    </ThemeProvider>
  );
}

// export async function getStaticProps() {
//   const homeResponse = await fetchPage("4U1GSbufjN9wm74xKKVGN0");

//   if (homeResponse.fields) {
//     return {
//       props: {
//         hero: homeResponse.fields.hero,
//       },
//     };
//   }
// }
