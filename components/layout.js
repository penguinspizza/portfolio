import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'
import Script from 'next/script.js'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="robots" content="noindex" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <Header />
      <div className="container">
        <nav className="navbar">
          <div className="container-fluid">
            <span className="navbar-text">navbar</span>
          </div>
        </nav>
        {props.children}
      </div>
      <Footer isFixed={props.isFixedFooter} />
    </div>
  )
}
