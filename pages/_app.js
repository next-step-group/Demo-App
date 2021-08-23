import "../styles/globals.css";
import Layout from "../components/Layout";
import { reportWebVitals } from "next-step-npm";

// export async function reportWebVitals(metric) {
//   const body = JSON.stringify(metric);
//   const url = '/api'; -----> this file holds handler function

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   console.log('BODY IS', body);
//   await fetch(url, { body, method: 'POST', keepalive: true })

// }

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export { reportWebVitals };
export default MyApp;
