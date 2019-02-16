import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header/header'
import Footer from './Footer/footer'

export default ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Site Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="stylesheet" href="https://use.typekit.net/ojc7pzz.css" />
      <body className="font-thin" />
    </Helmet>
    <Header />
    <div className="container mx-auto">
      {children}
    </div>
    <Footer />
  </div>
)
