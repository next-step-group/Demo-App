import '../styles/globals.css';
import Layout from '../components/Layout';
import Image from 'next/image'


export async function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = '/api';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  console.log('BODY IS', body);
  await fetch(url, { body, method: 'POST', keepalive: true })
  
}


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
      <Image src="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" height='563' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" height='665' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdmVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" height='666' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" height='664' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" height='667' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" height='667' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdmVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" height='666' width='1000'></Image>
      <Image src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" height='667' width='1000'></Image>
    </Layout>
  )
}


export default MyApp
