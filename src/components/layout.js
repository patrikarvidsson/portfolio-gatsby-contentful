import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import base from '../css/style.css'
import Container from './container'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        {children}
      </Container>
    )
  }
}

export default Template
