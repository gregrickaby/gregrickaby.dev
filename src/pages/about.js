import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About Us" />
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim
      nosmet ipsos nosse non possumus. Quis enim redargueret? Nonne videmus
      quanta perturbatio rerum omnium consequatur, quanta confusio? Itaque eos
      id agere, ut a se dolores, morbos, debilitates repellant. Vitae autem
      degendae ratio maxime quidem illis placuit quieta. Quae cum magnifice
      primo dici viderentur, considerata minus probabantur. Atque haec
      coniunctio confusioque virtutum tamen a philosophis ratione quadam
      distinguitur.{" "}
    </p>
  </Layout>
)

export default About
