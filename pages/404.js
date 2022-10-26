/**
 * @file 404.js
 */

// Import dependencies
import { React } from "react";
import Head from "next/head";
import { ThemeProvider, Typography } from "@mui/material";

// Import styles
import { appTheme } from "../styles/appTheme";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchPage } from "../utils/contentfulData";

export default function PageNotFound(props) {
  return (
    <ThemeProvider theme={appTheme}>
      <Head>
        <title>404 | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`The page you requested could not be found.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"Page Not Found"}
        heroImage={expertsBackground}
        button={false}
      />
      <Footer />
    </ThemeProvider>
  );
}

// export async function getStaticProps() {
//   const pageNotFoundResponse = await fetchPage('6A4SrAAreqG2puQWW8LKkE');

//   if (pageNotFoundResponse.fields) {
//     return {
//       props: {
//         heading: pageNotFoundResponse.fields.heading,
//         description: pageNotFoundResponse.fields.description,
//       },
//     };
//   }
// }
