import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
