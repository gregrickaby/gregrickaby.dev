import React from "react"

import Layout from "../components/layout"
import SEO from "../components/Seo"

const Experiment = ({ location }) => (
  <Layout location={location}>
    <SEO title="Photon vs. Cloudinary" />
    <h1>Photon vs. Cloudinary</h1>

    <p>
      <a href="https://developer.wordpress.com/docs/photon/api/">Photon</a>{" "}
      image below. Using interactive resizing via query string to fit a very
      large image, into the column width on this page.
    </p>
    <p>
      {" "}
      <code>
        https://i0.wp.com/ma.tt/files/2014/09/8084136238_169f1ca1f0_o.jpg?w=881&h=496
      </code>
    </p>
    <img
      src="https://i0.wp.com/ma.tt/files/2014/09/8084136238_169f1ca1f0_o.jpg?w=881&h=496"
      alt="Photon"
      height="496"
      width="881"
    />

    <p>
      <a href="https://demo.cloudinary.com/default">Cloudinary</a> image below.
      Using interactive resizing via query string to fit a very large image,
      into the column width on this page.
    </p>
    <p>
      {" "}
      <code>
        https://res.cloudinary.com/idemo/image/upload/h_496,w_881/sofa_cat.jpg
      </code>
    </p>
    <img
      src="https://res.cloudinary.com/idemo/image/upload/h_496,w_881/sofa_cat.jpg"
      alt="Cloudinary"
      height="496"
      width="881"
    />
    <h2>Testing Results</h2>
    <p>
      The normal front-end audit tools are{" "}
      <span role="img" aria-label="thumbs up">
        👍🏻
      </span>{" "}
      with using interactive resizing. See the results below.
    </p>
    <ul>
      <li>
        <a href="https://webspeedtest.cloudinary.com/results/190416_NX_5746c13ba02029fbfed745e302352ee1">
          Cloudinary
        </a>
      </li>
      <li>
        <a href="https://www.webpagetest.org/result/190416_2A_e549e203ad05c3dc1f4bb905433c4cec/">
          WebPageTest
        </a>
      </li>
      <li>
        <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fgregrickaby.dev%2Fphoton-vs-cloudinary%2F&tab=desktop">
          PageSpeed
        </a>
      </li>
    </ul>
  </Layout>
)

export default Experiment
