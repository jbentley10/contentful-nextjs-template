/**
 * @file services.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Head from "next/head";

// Import styles
import { appTheme } from "../styles/appTheme";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";
import Footer from "../components/footer";

// Import functions
import { fetchPage } from "../utils/contentfulData";

export default function AboutUs(props) {
  return (
    <ThemeProvider theme={appTheme}>
      <Head>
        <title>About Us | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Learn more about Epidemiology Research & Methods (ERM).`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"About Us"}
        heroImage={expertsBackground}
        button={false}
      />
      <Footer />
    </ThemeProvider>
  );
}

// export async function getStaticProps() {
//   const servicesResponse = await fetchPage('veJf1fVmcVYSEqAMAMMV8');

//   if (servicesResponse.fields) {
//     return {
//       props: {
        
//       },
//     };
//   }
// }
