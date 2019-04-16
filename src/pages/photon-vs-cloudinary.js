import React from "react"

import Layout from "../components/layout"
import SEO from "../components/Seo"

const Experiment = ({ location }) => (
  <Layout location={location}>
    <SEO title="Photon vs. Cloudinary" />
    <h1>Photon vs. Cloudinary</h1>

    <p>
      <a href="https://developer.wordpress.com/docs/photon/api/">Photon</a>{" "}
      image below. Using interactive resizing via query string.
    </p>
    <p>
      {" "}
      <code>
        https://i0.wp.com/ma.tt/files/2014/09/8084136238_169f1ca1f0_o.jpg?w=1920&h=1080
      </code>
    </p>
    <img
      src="https://i0.wp.com/ma.tt/files/2014/09/8084136238_169f1ca1f0_o.jpg?w=1920&h=1080"
      alt="Photon"
      height="1080"
      width="1920"
    />

    <p>
      <a href="https://demo.cloudinary.com/default">Cloudinary</a> image below.
      Using interactive resizing via query string.
    </p>
    <p>
      {" "}
      <code>
        https://res.cloudinary.com/idemo/image/upload/h_1080,w_1920/sofa_cat.jpg
      </code>
    </p>
    <img
      src="https://res.cloudinary.com/idemo/image/upload/h_1080,w_1920/sofa_cat.jpg"
      alt="Cloudinary"
      height="1080"
      width="1920"
    />
    <h2>Testing Results</h2>
  </Layout>
)

export default Experiment
