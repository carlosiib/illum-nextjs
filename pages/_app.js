import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="mainContainer">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
