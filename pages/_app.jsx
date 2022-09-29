import Layout from '../components/layout';
import Seo from '../components/SEO/seo';

import '../sass/globals.scss';

function MyApp({ Component, pageProps, canonical }) {
  return (
    <>
      <Seo canonical={canonical} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = ({ctx}) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "https://www.danjward.com" : "http://localhost:3000";
  const {asPath} = ctx;
  const canonical = base + asPath;
  return {
    canonical
  }
}
export default MyApp
