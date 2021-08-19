import '../styles/globals.css';
import Layout from '../components/Layout';


export async function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = '/api/NSMetrics';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  console.log('BODY IS', body);
  await fetch(url, { body, method: 'POST', keepalive: true })
  
}


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
